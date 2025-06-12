import { PathHelper } from "./path-helper";
import { FileTreeTable } from "./terminal-backend";

const TEST_FILE_TABLE: FileTreeTable = {
  "/": { isDir: true, children: ["/my_photos", "/my_documents", "/test"] },
  "/my_photos": { isDir: true, children: ["/my_photos/vacation"], parent: "/" },
  "/my_photos/wallpaper.jpg": {
    isDir: false,
    children: [],
    parent: "/my_photos",
  },
  "/my_photos/vacation": {
    isDir: true,
    children: ["/my_photos/vacation/paris.jpg"],
    parent: "/my_photos",
  },
  "/my_photos/vacation/paris.jpg": { isDir: false, children: [] },
  "/my_documents": { isDir: true, children: [], parent: "/" },
  "/temp": { isDir: true, children: [], parent: "/" },
};

describe("path-helper", () => {
  test.each([
    [
      "my_photos/vacation/non-existent-file.txt",
      "/",
      "/my_photos/vacation/non-existent-file.txt",
    ],
    ["temp", "/", "/temp"],
    ["../", "/my_photos/vacation", "/my_photos"],
    ["../", "/", "/"],
    [
      "../../../../../../my_photos/vacation/../wallpaper.jpg",
      "/",
      "/my_photos/wallpaper.jpg",
    ],
    [
      "../non-exist/non-exist2/../non-exist2/non-exist-file.txt",
      "/my_photos/vacation",
      "/my_photos/non-exist/non-exist2/non-exist-file.txt",
    ],
    ["/some/non-existent/path", "/", "/some/non-existent/path"],
  ])(
    "resolving path '%s' from '%s' should return '%s'",
    (path, cwd, expected) => {
      const pathHelper = new PathHelper(TEST_FILE_TABLE);
      expect(pathHelper.resolve(path, cwd)).toEqual(expected);
    },
  );
});
