<script lang="ts" setup>
import {reactive, computed} from 'vue';
import {useRouter} from "vue-router";
import {tree} from "../constants/FileTree";
import {TrieBasedTerminalBackend} from "../services/terminal-backend";
import {detectBrowser} from "../utils";

interface ShellState {
    line: string
    history: string[]
    cwdName: string
}

const router = useRouter()
const shell = reactive<ShellState>({
    line: '',
    cwdName: '/',
    history: []
})
const formattedLine = computed(() => shell.line.replace(/\s+/g, ' ').trim())

const terminalBackend = new TrieBasedTerminalBackend(tree, {
    'ls': args => {
        const dir = args.length === 0 ? undefined : args[0]
        let results: string[]
        try {
            results = terminalBackend.ls(dir)
            printTerminalResult(terminalBackend.ls(args[0]))
        } catch(e: any) {
            printTerminalResult([e.message])
            return
        }
        const formattedResults = results.map(path => {
            if (path.endsWith('/')) {
                return `<span class="text-blue-700">${path}</span>`
            }
            return path
        })
        printTerminalResult(formattedResults)
    },
    'cd': args => {
        if (args.length === 0) {
            printTerminalResult(['Error: expected at least one argument'])
        }
        printTerminalResult([])
        try {
            shell.cwdName = terminalBackend.changeDirectory(args[0])
        } catch (e: any) {
            printTerminalResult([e.message])
        }
    },
    'clear': args => {
        shell.history = []
    },
    'open': args => {
        if (args.length === 0) {
            printTerminalResult(['Error: expected at least one argument'])
        }
        try {
            const file = terminalBackend.getFile(args[0])
            if (file.metadata) {
                router.push({name: file.metadata.routeName})
            }
        } catch (e: any) {
            printTerminalResult([e.message])
        }
    },
    'help': args => [],
    'help-2': args => []
})

const generateTerminalBase = (cwd: string) => (
    `<span class="text-green-400">visitor@${detectBrowser()}</span>` +
    `<span>:</span>` +
    `<span class="text-blue-600">${cwd}</span>` +
    `<span>$&nbsp;</span>`
)

async function scrollBottom() {
    // NOTE: Wrapped in timeout since for some reason the element doesn't scroll if you don't
    setTimeout(() => {
        const innerTerminalElement = document.getElementById('inner-terminal')
        if (innerTerminalElement) {
            innerTerminalElement.scrollTop = innerTerminalElement.scrollHeight
        }
    }, 10)
}

function printTerminalResult(results: string[]) {
    shell.history = shell.history.concat([
        generateTerminalBase(shell.cwdName) + shell.line,
        ...results
    ])
}

function processCommand() {
    terminalBackend.processCommand(formattedLine.value)
    shell.line = ''
    scrollBottom()
}

function fillCommandHistory() {}

function processAutoComplete() {
    const autocomplete = terminalBackend.tabComplete(shell.line)
    if (autocomplete.length === 1) {
        const splitLine = shell.line.split(' ')
        const nonAutoCompletePart = splitLine.slice(0, splitLine.length-1).join(' ')
        const separator = nonAutoCompletePart === '' ? '' : ' '
        shell.line = nonAutoCompletePart + separator + autocomplete[0]
    } else if (autocomplete.length > 1) {
        printTerminalResult(autocomplete)
    }
    scrollBottom()
}
</script>


<template>
    <div class="text-white p-2 bg-darcula-500" style="font-family: 'Ubuntu Mono', monospace">
        <div class="flex flex-col h-full overflow-auto bg-darcula-700 box-border p-4" id="inner-terminal">
            <span v-for="(entry, i) in shell.history" v-html="entry" :key="i"></span>
            <div class="flex">
                <span v-html="generateTerminalBase(shell.cwdName)" />
                <input class="flex-grow bg-transparent text-white border-none outline-none"
                       v-model="shell.line"
                       @keydown.prevent.tab="processAutoComplete"
                       ref="cmdLine"
                       @keyup.enter="processCommand"
                       @keyup.up="fillCommandHistory"
                />
            </div>
        </div>
    </div>
</template>
