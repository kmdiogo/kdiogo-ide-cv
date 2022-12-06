<script lang="ts" setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { tree } from "@/constants/FileTree";
import {
  TrieBasedTerminalBackend,
  TerminalError,
} from "@/services/terminal-backend";
import { detectBrowser } from "@/utils";

interface ShellState {
  line: string;
  history: string[];
  cmdHistory: string[];
  cmdHistoryIndex: number;
  cwdName: string;
}

const router = useRouter();
const shell = reactive<ShellState>({
  line: "",
  cwdName: tree.label,
  cmdHistory: [],
  cmdHistoryIndex: 0,
  history: [],
});
const formattedLine = computed(() => shell.line.replace(/\s+/g, " ").trim());

const commandDescriptions = {
  ls: "list out the contents of the current directory",
  cd: "change the current directory to specified path",
  clear: "clear out the contents of the terminal",
  open: "opens the specified file. This redirects to the web page associated with the file.",
  history: "list the history of commands ran for this terminal session",
};

const terminalBackend = new TrieBasedTerminalBackend(tree, {
  ls: (args) => {
    const dir = args.length === 0 ? undefined : args[0];
    let results: string[];
    try {
      results = terminalBackend.ls(dir);
      printTerminalResult(terminalBackend.ls(args[0]));
    } catch (e) {
      if (e instanceof TerminalError) {
        printTerminalResult([e.message]);
        return;
      }
      throw e;
    }
    const formattedResults = results.map((path) => {
      if (path.endsWith("/")) {
        return `<span class="text-blue-700">${path}</span>`;
      }
      return path;
    });
    printTerminalResult(formattedResults);
  },
  cd: (args) => {
    if (args.length === 0) {
      printTerminalResult(["Error: expected at least one argument"]);
      return;
    }
    try {
      const newCwd = terminalBackend.changeDirectory(args[0]);
      printTerminalResult([]);
      shell.cwdName = newCwd;
    } catch (e) {
      if (e instanceof TerminalError) {
        printTerminalResult([e.message]);
        return;
      }
      throw e;
    }
  },
  clear: () => {
    shell.history = [];
  },
  open: (args) => {
    if (args.length === 0) {
      printTerminalResult(["Error: expected at least one argument"]);
    }
    try {
      const file = terminalBackend.getFile(args[0]);
      if (file.metadata) {
        router.push(file.metadata.routePath);
      }
    } catch (e) {
      if (e instanceof TerminalError) {
        printTerminalResult([e.message]);
        return;
      }
      throw e;
    }
  },
  history: () => {
    printTerminalResult(
      shell.cmdHistory.map((cmd, i) => `${i + 1}&nbsp;&nbsp;${cmd}`)
    );
  },
  help: () => {
    const helpStr = Object.entries(commandDescriptions).map(
      ([cmdName, desc]) => {
        return `${cmdName} - ${desc}`;
      }
    );
    printTerminalResult(["Available commands:", ...helpStr]);
  },
});

const generateTerminalBase = (cwd: string) =>
  `<span class="text-green-400">visitor@${detectBrowser()}</span>` +
  `<span>:</span>` +
  `<span class="text-blue-600">${cwd}</span>` +
  `<span>$&nbsp;</span>`;

async function scrollBottom() {
  // NOTE: Wrapped in timeout since for some reason the element doesn't scroll if you don't
  setTimeout(() => {
    const innerTerminalElement = document.getElementById("inner-terminal");
    if (innerTerminalElement) {
      innerTerminalElement.scrollTop = innerTerminalElement.scrollHeight;
    }
  }, 10);
}

function printTerminalResult(results: string[]) {
  shell.history = shell.history.concat([
    generateTerminalBase(shell.cwdName) + shell.line,
    ...results,
  ]);
}

function processCommand() {
  if (formattedLine.value === "") {
    printTerminalResult([""]);
  }
  try {
    terminalBackend.processCommand(formattedLine.value);
  } catch (e) {
    if (e instanceof TerminalError) {
      printTerminalResult([e.message]);
    } else {
      throw e;
    }
  }

  if (formattedLine.value !== "") {
    shell.cmdHistory.push(formattedLine.value);
    shell.cmdHistoryIndex = shell.cmdHistory.length;
  }
  shell.line = "";
  scrollBottom();
}

function fillCommandHistory(direction: "up" | "down") {
  if (shell.cmdHistory.length === 0) {
    return;
  }
  shell.cmdHistoryIndex += direction === "up" ? -1 : 1;
  if (shell.cmdHistoryIndex < 0) {
    shell.cmdHistoryIndex = 0;
    return;
  }
  if (shell.cmdHistoryIndex >= shell.cmdHistory.length) {
    shell.cmdHistoryIndex = shell.cmdHistory.length;
    shell.line = "";
    return;
  }
  shell.line = shell.cmdHistory[shell.cmdHistoryIndex];
}

function processAutoComplete() {
  const autocomplete = terminalBackend.tabComplete(shell.line);
  if (autocomplete.length === 1) {
    const splitLine = shell.line.split(" ");
    const nonAutoCompletePart = splitLine
      .slice(0, splitLine.length - 1)
      .join(" ");
    const separator = nonAutoCompletePart === "" ? "" : " ";
    shell.line = nonAutoCompletePart + separator + autocomplete[0];
  } else if (autocomplete.length > 1) {
    printTerminalResult(autocomplete);
  }
  scrollBottom();
}
</script>

<template>
  <div
    class="text-white p-3 pr-0 bg-darcula-500"
    style="font-family: 'Ubuntu Mono', monospace"
  >
    <div
      class="flex flex-col h-full overflow-auto bg-darcula-700 box-border p-4"
      id="inner-terminal"
    >
      <span v-for="(entry, i) in shell.history" v-html="entry" :key="i"></span>
      <div class="flex">
        <span v-html="generateTerminalBase(shell.cwdName)" />
        <input
          class="flex-grow bg-transparent text-white border-none outline-none"
          v-model="shell.line"
          @keydown.prevent.tab="processAutoComplete"
          ref="cmdLine"
          @keyup.enter="processCommand"
          @keyup.esc="
            (e) => {
              e.target.blur();
            }
          "
          @keyup.up.prevent="() => fillCommandHistory('up')"
          @keyup.down.prevent="() => fillCommandHistory('down')"
        />
      </div>
    </div>
  </div>
</template>
