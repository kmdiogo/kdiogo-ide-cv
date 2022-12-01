import { FileTreeTable } from "./terminal-backend";
import pathb from "path-browserify";

export class PathHelper {
  fileTable: FileTreeTable;
  constructor(fileTable: FileTreeTable) {
    this.fileTable = fileTable;
  }

  resolve(path: string, currentDirectory: string) {
    if (!currentDirectory.startsWith("/")) {
      throw Error("currentDirectory must be an absolute path.");
    }
    // Abs path already
    if (path.startsWith("/")) {
      return this.normalize(path);
    }
    const normPath = this.normalize(path);
    const normCurDir = this.normalize(currentDirectory);
    if (normPath === "" || normPath === ".") {
      return normCurDir;
    }
    let runningDir = normCurDir;
    for (const pathPiece of normPath.split("/")) {
      if (pathPiece === "..") {
        if (this.fileTable[runningDir]?.parent !== undefined) {
          runningDir = this.fileTable[runningDir].parent as string;
        }
        continue;
      }
      runningDir = pathb.join(runningDir, pathPiece);
    }
    return runningDir;
  }

  /**
   * Normalize path (same way node.js path module does) and remove trailing slashes
   * @param path
   */
  normalize(path: string): string {
    let norm = pathb.normalize(path);
    if (norm.length > 1 && norm.endsWith("/")) {
      norm = norm.slice(0, -1);
    }
    return norm;
  }
}
