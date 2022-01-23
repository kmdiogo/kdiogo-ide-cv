import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import routes from "@/router/routes";
import {useTabHistoryStore} from "@/stores/tab-history";

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

router.afterEach((to => {
    const tabHistoryStore = useTabHistoryStore()
    tabHistoryStore.addTabToHistory(to)
}))

export default router;
