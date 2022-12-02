import {TrieBasedTerminalBackend, convertToTable, FileTreeTable} from "./terminal-backend";
import { FileTreeNode } from "@/constants/FileTree";

export const TEST_FILE_TREE: FileTreeNode = {
  label: "/",
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

describe("convert tree to file table", () => {
  it("should produce expected file table from file tree", () => {
    const fileTable = convertToTable(TEST_FILE_TREE)
    const expectedFileTable: FileTreeTable = {
      "/": {
        isDir: true,
        children: [
          "/my_photos",
          "/my_documents",
          "/temp"
        ],
        parent: "/"
      },
      "/my_photos": {
        isDir: true,
        children: [
          "/my_photos/vacation",
          "/my_photos/wallpaper.jpg"
        ],
        parent: "/"
      },
      "/my_photos/vacation": {
        isDir: true,
        children: [
          "/my_photos/vacation/paris.jpg"
        ]
      },
      "/my_photos/vacation/paris.jpg": {
        isDir: false,
        children: [],
        parent: "/my_photos",
        metadata: {
          label: "paris.jpg",
          icon: "test-icon",
          iconColor: "green",
          routePath: ""
        },
      },
      "/my_photos/wallpaper.jpg": {
        isDir: false,
        children: [],
        parent: "/",
        metadata: {
          label: "wallpaper.jpg",
          icon: "test-icon",
          iconColor: "green",
          routePath: ""
        }
      },
      "/my_documents": {
        isDir: true,
        children: [],
        parent: "/"
      },
      "/temp": {
        isDir: true,
        children: [],
        parent: "/"
      },
    }
    expect(fileTable).toMatchObject(expectedFileTable)
  })
})

// TODO: test conversion to file table
