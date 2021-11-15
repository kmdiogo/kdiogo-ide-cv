import router from "@/router";
import {RouteRecordRaw} from "vue-router";

interface PageTabHistory {
    [routeName: string]: RouteRecordRaw;
}

export interface TabHistoryState {
    pageTabHistory: PageTabHistory;
}

export default {
    state: {
        pageTabHistory: {}
    },
    mutations: {
        addTabToHistory(state: TabHistoryState, route: RouteRecordRaw) {
            if (!route.name) {
                throw `Route with path '${route.path}' must have a defined name to use with the tab history API.`
            }
            if (!state.pageTabHistory[route.name as string]) {
                state.pageTabHistory[route.name as string] = {...route}
                /*state.pageTabHistory = {
                    ...state.pageTabHistory,
                    [route.name as string]: {...route}
                }*/
            }
        },
        removeTabFromHistory(state: TabHistoryState, tabName: string) {
            if (state.pageTabHistory[tabName]) {
                const keys = Object.keys(state.pageTabHistory);
                if (keys.length > 1) {
                    let isDeletingCurrentTab;
                    if (state.pageTabHistory[tabName].name === router.currentRoute.value.name)
                        isDeletingCurrentTab = true;

                    delete state.pageTabHistory[tabName];

                    if (isDeletingCurrentTab) {
                        const keys = Object.keys(state.pageTabHistory);
                        const newTo = state.pageTabHistory[keys[keys.length-1]].path;
                        router.push(newTo);
                    }
                }
            }
        }
    },
    actions: {

    }
}
