import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {store} from "@/store"
import routes from "@/router/routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

router.afterEach((to => {
    store.commit('addTabToHistory', to)
}))

export default router;
