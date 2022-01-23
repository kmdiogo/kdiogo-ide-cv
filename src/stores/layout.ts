import { defineStore } from 'pinia'

interface LayoutState {
    terminalOpen: boolean
}

export const useLayoutStore = defineStore('layout-state', {
    state: (): LayoutState => ({
        terminalOpen: false
    }),
    actions: {
        toggleTerminalOpen() {
            this.terminalOpen = !this.terminalOpen
        }
    }
})
