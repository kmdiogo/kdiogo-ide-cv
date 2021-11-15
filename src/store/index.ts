import { createStore } from "vuex";
import TabHistory, {TabHistoryState} from '@/store/tab-history'

export interface GlobalState {
    tabHistory: TabHistoryState;
}
export const store =  createStore({
    state: {
        isTerminalOpen: false
    },
    mutations: {
        toggleIsTerminalOpen(state) {
            state.isTerminalOpen = !state.isTerminalOpen
        }
    },
    actions: {},
    modules: {
        tabHistory: TabHistory
    }
});
