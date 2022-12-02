import { RouteMeta } from "vue-router";
import { FileTreeNode } from "@/constants/FileTree";
import { PathHelper } from "@/services/path-helper";
import { Trie } from "@/utils/data-structures";
import pathb from "path-browserify";
import { findStem } from "@/utils";

interface FileMeta extends RouteMeta {
  routePath: string;
}

export interface FileTreeTableItem {
  isDir: boolean;
  children: string[];
  metadata?: FileMeta;
  parent?: string;
}

export interface FileTreeTable {
  [key: string]: FileTreeTableItem;
}

/**
 * Recursively convert a file tree into a flattened lookup table.
 * @param tree
 */
export function convertToTable(tree: FileTreeNode): FileTreeTable {
  const table: FileTreeTable = {};
  function recursiveCall(node: FileTreeNode, parent?: string) {
    // No parent means this node is the root, so set parent as itself
    const nodeParent = parent ? parent : node.label;
    const absPath = parent ? pathb.join(parent, node.label) : nodeParent;

    const children = node.directories.map((node) =>
      pathb.join(absPath, node.label)
    );
    // Add files as table entries
    for (const file of node.files) {
      if (!file.meta) {
        throw Error(
          `Route record for path ${file.path} does not have the proper meta configured for use with the terminal. Please add this in via Vue router.`
        );
      }
      const fileAbsPath = pathb.join(absPath, file.meta.label);
      table[fileAbsPath] = {
        isDir: false,
        metadata: file.meta && {
          routePath: file.path,
          ...file.meta,
        },
        children: [],
        parent: nodeParent,
      };
      // Make sure to record the file as a child of the directory we're processing
      children.push(fileAbsPath);
    }

    // Add directory to table
    table[absPath] = {
      isDir: true,
      children,
      parent: nodeParent,
    };
    for (const n of node.directories) {
      recursiveCall(n, absPath);
    }
  }
  recursiveCall(tree);
  return table;
}

export interface CommandCollection {
  [key: string]: (args: string[]) => void;
}

export interface TerminalBackend {
  tabComplete: (line: string) => string[];
  processCommand: (line: string) => void;
  changeDirectory: (directory: string) => string;
}

export class TerminalError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class TrieBasedTerminalBackend implements TerminalBackend {
  // Tries generated for each directory (so we can text search their contents)
  fileTries: { [key: string]: Trie };
  fileTable: FileTreeTable;

  // Trie used for text searching commands
  commandTrie: Trie;
  commands: CommandCollection;

  pathHelper: PathHelper;

  cwd: string;
  constructor(fileTree: FileTreeNode, commands: CommandCollection) {
    this.fileTable = convertToTable(fileTree);
    this.commands = commands;
    this.pathHelper = new PathHelper(this.fileTable);
    this.cwd = fileTree.label;

    // Populate file tries
    this.fileTries = {};
    for (const filename in this.fileTable) {
      this.fileTries[filename] = new Trie();
      for (const childFilename of this.fileTable[filename].children) {
        this.fileTries[filename].insert(pathb.basename(childFilename));
      }
    }

    // Populate command name tries
    this.commandTrie = new Trie();
    for (const commandName in commands) {
      this.commandTrie.insert(commandName);
    }
  }

  changeDirectory(directoryPath: string) {
    const path = this.pathHelper.resolve(directoryPath, this.cwd);
    if (!(path in this.fileTable)) {
      throw new TerminalError(`'${directoryPath}' not found`);
    }
    if (!this.fileTable[path].isDir) {
      throw new TerminalError(`'${directoryPath}' is not a directory`);
    }
    this.cwd = path;
    return path;
  }

  processCommand(line: string) {
    const trimLine = line.trim();
    if (trimLine === "") {
      return;
    }
    const split = line.trim().split(" ");
    const commandName = split[0];
    const args = split.slice(1);

    if (!(commandName in this.commands)) {
      throw new TerminalError(`No matching command found for '${commandName}'`);
    }
    this.commands[commandName](args);
  }

  ls(path?: string): string[] {
    const path_ = path !== undefined ? path : this.cwd;
    const absPath = this.pathHelper.resolve(path_, this.cwd);
    if (!(absPath in this.fileTable)) {
      throw new TerminalError(`'${path}' not found`);
    }
    if (!this.fileTable[absPath].isDir) {
      throw new TerminalError(`'${path}' is not a directory`);
    }
    return this.fileTable[absPath].children.map((child) => {
      const basename = pathb.basename(child);
      if (this.fileTable[child].isDir) {
        return basename + "/";
      }
      return basename;
    });
  }

  getFile(path: string): FileTreeTableItem {
    const absPath = this.pathHelper.resolve(path, this.cwd);
    if (!(absPath in this.fileTable)) {
      throw new TerminalError(`'${path}' not found`);
    }
    if (this.fileTable[absPath].isDir) {
      throw new TerminalError(`'${path}' is a directory`);
    }
    return this.fileTable[absPath];
  }

  tabComplete(line: string) {
    let trimLine = line.trimStart();
    // Keep one space after command but strip off the rest if whitespace was present
    if (trimLine !== trimLine.trimEnd()) {
      trimLine = trimLine.trim() + " ";
    }

    const words = trimLine.split(" ");
    // Autocomplete command from command table
    if (words.length === 1) {
      return this.commandTrie.find(words[0]);
    }

    const userTypedPath = words[words.length - 1];
    const normalizedUserTypedPath = this.pathHelper.normalize(userTypedPath);
    const absUserTypedPath = this.pathHelper.resolve(
      normalizedUserTypedPath,
      this.cwd
    );
    const parsedUserTypedPath = pathb.parse(absUserTypedPath);

    let searchTerm = pathb.basename(absUserTypedPath);
    let searchDirectory = parsedUserTypedPath.dir;
    // Trailing slash in user input means to list out contents of directory
    if (userTypedPath.endsWith("/") || normalizedUserTypedPath === ".") {
      if (!(absUserTypedPath in this.fileTable)) {
        return [];
      }
      searchTerm = "";
      searchDirectory = absUserTypedPath;
    }

    // Return no results since the directory of the user's provided path doesn't exist
    if (!(searchDirectory in this.fileTable)) {
      return [];
    }

    // console.log("search dir", searchDirectory)
    // console.log("search term", searchTerm)
    const results = this.fileTries[searchDirectory]
      .find(searchTerm)
      .map((entry) => {
        const suggestionAbsPath = pathb.join(searchDirectory, entry);
        let newEntry = pathb.basename(entry);
        if (this.fileTable[suggestionAbsPath].isDir) {
          newEntry += "/";
        }
        return newEntry;
      });

    // Keep the directory of what the user has typed if there's only one suggestion
    if (results.length === 1) {
      return [pathb.join(pathb.dirname(normalizedUserTypedPath), results[0])];
    }
    // Autofill a stem if there files/directories with common substrings
    const resultsStem = findStem(results);
    if (resultsStem && resultsStem !== searchTerm) {
      return [pathb.join(pathb.dirname(normalizedUserTypedPath), resultsStem)];
    }
    return results;
  }
}
