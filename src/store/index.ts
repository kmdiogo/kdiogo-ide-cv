import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import TabHistory, {TabHistoryStoreState} from '../store/tab-history'

export interface AllStoreState {
    tabHistory: TabHistoryStoreState;
    isTerminalOpen: boolean
}

interface RootStoreState {
    isTerminalOpen: boolean
}

export const store = createStore<RootStoreState>({
    state: {
        isTerminalOpen: false,
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

export const key: InjectionKey<Store<AllStoreState>> = Symbol()
export function useStore() {
    return baseUseStore(key)
}
