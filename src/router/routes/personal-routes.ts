import AboutMe from "@/views/Personal/AboutMe.vue"
import Experience from "@/views/Personal/Experience.vue";
import Skills from "@/views/Personal/Skills.vue";
import {RouteRecordRaw} from "vue-router";

const personalRoutes: Array<RouteRecordRaw> = [
    {
        path: '/AboutMe',
        component: AboutMe,
        name: 'AboutMe.html',
        meta: {
            label: 'about-me.html',
            icon: 'fas file-code',
            iconColor: 'darkorange',
        }
    },
    {
        path: '/Skills',
        component: Skills,
        name: 'Skills.html',
        meta: {
            label: 'skills.html',
            icon: 'fas file-code',
            iconColor: 'darkorange',
        }
    },
    {
        path: '/Experience',
        component: Experience,
        name: 'Experience.html',
        meta: {
            label: 'experience.html',
            icon: 'fas file-code',
            iconColor: 'darkorange',
        }
    }
];

export default personalRoutes
