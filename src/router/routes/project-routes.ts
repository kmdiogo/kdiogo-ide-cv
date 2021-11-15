import Trivialize from "@/views/Projects/Trivialize.vue"
import {RouteRecordRaw} from "vue-router";

const projectRoutes: Array<RouteRecordRaw> = [
    {
        path: '/Trivialize',
        component: Trivialize,
        name: 'Trivialize.html',
        meta: {
            label: 'Trivialize.html',
            icon: 'fas file-code',
            iconColor: 'darkorange',
        }
    },
];

export default projectRoutes
