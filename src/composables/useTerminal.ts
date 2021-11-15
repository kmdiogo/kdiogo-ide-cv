import {reactive, computed} from 'vue';
import {useRouter, useRoute, RouteRecordRaw} from "vue-router";
import {FileTreeArrayItem} from "@/constants/FileTree";
import {isOrderedSubstring} from "@/utils";

export interface ShellState {
    line: string;
    cwdIndex: number;
    cwdName: string;
    history: string[];
    commandHistory: string[];
    historyIndex: number;
    parsedLine: string[];
}

export function useTerminal(
    treeArray: FileTreeArrayItem[],
    innerTerminalElementId: string
) {
    const router = useRouter()
    const route = useRoute()
    const shell = reactive<ShellState>({
        line: '',
        cwdIndex: 0,
        cwdName: 'Root',
        history: [],
        commandHistory: [],
        historyIndex: -1,
        parsedLine: []
    })

    const cwd = computed(() => treeArray[shell.cwdIndex])

    function searchDirectories(search: string, directories: number[]) {
        for (let i=0; i < directories.length; i++) {
            const nextDir = treeArray[directories[i]];
            if (isOrderedSubstring(search, nextDir.label)) {
                return directories[i];
            }
        }
    }

    function traversePath(path: string[], cwdIndex: number) {
        let cur = cwdIndex;
        for (let i=0; i < path.length-1; i++) {
            if (path[i] === '..') {
                const parent = treeArray[cur].parent
                if (!parent) return;
                cur = parent;
            } else {
                const search = searchDirectories(path[i], treeArray[cur].directories)
                if (!search) return
                cur = search
            }
        }

        return treeArray[cur];
    }

    function searchFiles(search: string, files: RouteRecordRaw[]) {
        for (let i=0; i < files.length; i++) {
            if (isOrderedSubstring(search, String(files[i].name))) {
                return files[i].name;
            }
        }
        return;
    }

    function processAutocomplete() {
        shell.parsedLine = shell.line.split(' ');

        let directoryToSearch: FileTreeArrayItem | undefined = cwd.value;

        const path = shell.parsedLine[shell.parsedLine.length-1].split('/');

        if (path[path.length-1] === '') return;
        if (path.length > 1 && path[1] !== '') {
            directoryToSearch = traversePath(path, shell.cwdIndex);
            if (!directoryToSearch) return;
        }


        const dirSearch = searchDirectories(path[path.length-1], directoryToSearch.directories);
        if (dirSearch) {
            path[path.length-1] = treeArray[dirSearch].label + '/';
            shell.parsedLine[shell.parsedLine.length-1] = path.join('/');
            shell.line = shell.parsedLine.join(' ');
            return;
        }


        const fileSearch = searchFiles(path[path.length-1], directoryToSearch.files);
        if (fileSearch) {
            path[path.length-1] = String(fileSearch);
            shell.parsedLine[shell.parsedLine.length-1] = path.join('/');
            shell.line = shell.parsedLine.join(' ');
        }
    }

    const commandFunctions: {[key: string]: () => void} = {
        cd: () => {
            // Invalid number of arguments
            if (shell.parsedLine.length < 2) return
            // No directory specified
            if (shell.parsedLine[1] === '') return
            const splitPath = shell.cwdName.split('/')

            // Augmented traverse function to modify path name as traverse is done
            let pathRaw = shell.parsedLine[1];

            // Append slash if not present at end
            pathRaw = pathRaw.endsWith('/') ? pathRaw : pathRaw + '/';
            const path = pathRaw.split('/');
            let cur: number = shell.cwdIndex;
            // Iterate through file path while traversing the file tree
            for (let i=0; i < path.length-1; i++) {
                if (path[i] === '..') {
                    const parentIndex = treeArray[cur].parent
                    if (!parentIndex) return;
                    cur = parentIndex;
                    splitPath.pop();
                }
                else {
                    const foundDir = searchDirectories(path[i], treeArray[cur].directories);
                    if (!foundDir) {
                        shell.history.push(`Directory '${shell.parsedLine[1]}' not found`);
                        return;
                    } else {
                        cur = foundDir
                        splitPath.push(treeArray[cur].label);
                    }
                }
            }
            shell.cwdIndex = cur;
            shell.cwdName = splitPath.join('/');
        },
        open: () => {
            if (shell.parsedLine.length < 2) return;
            if (shell.parsedLine[1] === '') return;

            const path = shell.parsedLine[1].split('/');
            // Search through path
            const dir = traversePath(path, shell.cwdIndex);
            if (dir) {
                const fileIndex = dir.files.findIndex(obj => obj.name === path[path.length-1]);
                // Redirect to the matched page
                if (fileIndex !== -1) {
                    if (route.name !== dir.files[fileIndex].name) {
                        router.push({name: dir.files[fileIndex].name});
                        return
                    }
                }
            }
            shell.history.push(`Cannot find file: '${shell.parsedLine[1]}'`);
        },
        clear: () => {
            shell.history = []
        },
        ls: () => {
            console.log(cwd)
            cwd.value.directories.forEach(dir => {
                shell.history.push(`<span style="color: lightblue">${treeArray[dir].label}/</span>`);
            });
            cwd.value.files.forEach(file => {
                shell.history.push(`<span style="color: blue">${String(file.name)}</span>`);
            });
        },
        help: () => {
            shell.history.push('Available commands: ');
            shell.history.push('cd - changes current working directory ');
            shell.history.push('ls - lists out contents of current working directory');
            shell.history.push('open - loads specified page by the given filename');
            shell.history.push('clear - clears the terminal');
        }
    }

    /**
     * Updates the shell line to show a historical command.
     */
    function fillCommandHistory() {
        if (shell.commandHistory.length > 0) {
            // Check if user is scrolling through history or just starting
            if (shell.historyIndex === -1) {
                shell.historyIndex = shell.commandHistory.length-1;
                shell.line = shell.commandHistory[shell.historyIndex];
            } else if (shell.commandHistory[shell.historyIndex] === shell.line) {
                shell.historyIndex -= 1;
                shell.line = shell.commandHistory[shell.historyIndex];
            } else {
                shell.historyIndex = shell.commandHistory.length-1;
                shell.line = shell.commandHistory[shell.historyIndex];
            }
        }
    }

    /**
     * Parses the shell line and calls the appropriate command function.
     */
    function processCommand() {
        shell.parsedLine = shell.line.split(' ')
        const command = shell.parsedLine[0]
        if (Object.prototype.hasOwnProperty.call(commandFunctions, command)) {
            shell.commandHistory.push(shell.line)
            commandFunctions[command]()
        } else {
            shell.history.push(`Unknown command '${command}'`);
            shell.history.push("Type 'help' to see list of available commands");
        }
        shell.line = ''

        // Timeout hack scroll terminal scrollbar to top
        setTimeout(() => {
            const innerTerminalElement = document.getElementById(innerTerminalElementId)
            if (innerTerminalElement) {
                innerTerminalElement.scrollTop = innerTerminalElement.scrollHeight
            }
        }, 10)
    }

    return {
        shell,
        processCommand,
        fillCommandHistory,
        processAutocomplete
    }
}
