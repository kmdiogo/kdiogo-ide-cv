import Welcome from "@/views/Welcome.vue"
import README from "@/views/README.vue"
import {RouteRecordRaw} from "vue-router";

const rootRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Welcome,
        name: 'Welcome.html',
        meta: {
            label: 'welcome.html',
            icon: 'fas file-code',
            iconColor: 'darkorange',
        }
    },
    {
        path: '/README',
        component: README,
        name: 'README.txt',
        meta: {
            label: 'README.txt',
            icon: 'fas file-alt',
        }
    }
];

export default rootRoutes
