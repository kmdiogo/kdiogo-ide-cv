import { defineStore } from "pinia";
import { RouteLocationNormalized } from "vue-router";
import router from "../router";

interface TabHistoryState {
  pageTabHistory: { [routeName: string]: RouteLocationNormalized };
}

export const useTabHistoryStore = defineStore("tab-history", {
  state: (): TabHistoryState => ({
    pageTabHistory: {},
  }),
  actions: {
    addTabToHistory(route: RouteLocationNormalized) {
      // Skip if route is already in table
      if (this.pageTabHistory[route.path]) {
        return;
      }
      this.pageTabHistory[route.path] = { ...route };
    },
    removeTabFromHistory(route: RouteLocationNormalized) {
      const keys = Object.keys(this.pageTabHistory);
      if (!this.pageTabHistory[route.path]) {
        return;
      }
      // Don't remove tab from history if there's only one (so a page is always on the screen)
      if (keys.length <= 1) {
        return;
      }

      // Automatically redirect to the last route in history if the tab that got deleted was the current page
      let deletingCurrentTab = false;
      if (
        this.pageTabHistory[route.path].name === router.currentRoute.value.name
      ) {
        deletingCurrentTab = true;
      }
      delete this.pageTabHistory[route.path];
      if (deletingCurrentTab) {
        const keys = Object.keys(this.pageTabHistory);
        const newTo = this.pageTabHistory[keys[keys.length - 1]].path;
        router.push(newTo);
      }
    },
  },
});
