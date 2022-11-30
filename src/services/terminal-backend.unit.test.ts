import { TrieBasedTerminalBackend } from "./terminal-backend";
import { FileTreeNode } from "../constants/FileTree";

export const TEST_FILE_TREE: FileTreeNode = {
  label: "",
  directories: [
    {
      label: "my_photos",
      directories: [
        {
          label: "vacation",
          directories: [],
          files: [
            {
              path: "",
              redirect: "",
              meta: {
                label: "paris.jpg",
                icon: "test-icon",
                iconColor: "green",
              },
            },
          ],
        },
      ],
      files: [
        {
          path: "",
          redirect: "",
          meta: {
            label: "wallpaper.jpg",
            icon: "test-icon",
            iconColor: "green",
          },
        },
      ],
    },
    {
      label: "my_documents",
      directories: [],
      files: [],
    },
    {
      label: "temp",
      directories: [],
      files: [],
    },
  ],
  files: [],
};

describe("terminal-backend", () => {
  test.each([
    ["cd my", ["my_"]],
    ["cd my_", ["my_photos/", "my_documents/"]],
    ["cd ", ["my_photos/", "my_documents/", "temp/"]],
    ["cd ./", ["my_photos/", "my_documents/", "temp/"]],
    ["cd ../../../", ["my_photos/", "my_documents/", "temp/"]],
    ["cd my_photos", ["my_photos/"]],
    ["cd my_photos/", ["vacation/", "wallpaper.jpg"]],
    ["cd my_photos/vacation/../", ["wallpaper.jpg", "vacation/"]],
  ])("search '%s' to get '%s' from autocomplete", (input, expected) => {
    const terminalBackend = new TrieBasedTerminalBackend(TEST_FILE_TREE, {});
    expect(terminalBackend.tabComplete(input).sort()).toEqual(expected.sort());
  });
});
