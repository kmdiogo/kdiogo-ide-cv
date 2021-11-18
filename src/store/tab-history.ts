import router from "../router";
import {RouteRecordRaw} from "vue-router";
import {Module} from "vuex"


export interface TabHistoryStoreState {
    pageTabHistory: {[routeName: string]: RouteRecordRaw}
}

const module: Module<TabHistoryStoreState, any> = {
    state: {
        pageTabHistory: {}
    },
    mutations: {
        addTabToHistory(state, route: RouteRecordRaw) {
            // Skip if route is already in table
            if (state.pageTabHistory[route.path]) {
                return
            }
            state.pageTabHistory[route.path] = {...route}
        },
        removeTabFromHistory(state, route: RouteRecordRaw) {
            const keys = Object.keys(state.pageTabHistory);
            if (!state.pageTabHistory[route.path]) {
                return
            }
            // Don't remove tab from history if there's only one (so a page is always on the screen)
            if (keys.length <= 1) {
                return
            }

            // Automatically redirect to the last route in history if the tab that got deleted was the current page
            let deletingCurrentTab = false;
            if (state.pageTabHistory[route.path].name === router.currentRoute.value.name) {
                deletingCurrentTab = true;
            }
            delete state.pageTabHistory[route.path];
            if (deletingCurrentTab) {
                const keys = Object.keys(state.pageTabHistory);
                const newTo = state.pageTabHistory[keys[keys.length-1]].path;
                router.push(newTo);
            }
        }
    },
}

export default module
