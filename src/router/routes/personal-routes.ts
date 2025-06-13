import AboutMe from "@/views/Personal/AboutMe.vue";
import Experience from "@/views/Personal/Experience.vue";
import Skills from "@/views/Personal/Skills.vue";
import { RouteRecordRaw } from "vue-router";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

const personalRoutes: Array<RouteRecordRaw> = [
  {
    path: "/AboutMe",
    component: AboutMe,
    name: "AboutMe.html",
    meta: {
      label: "about-me.html",
      icon: faFileCode,
      iconColor: "darkorange",
    },
  },
  {
    path: "/Skills",
    component: Skills,
    name: "Skills.html",
    meta: {
      label: "skills.html",
      icon: faFileCode,
      iconColor: "darkorange",
    },
  },
  {
    path: "/Experience",
    component: Experience,
    name: "Experience.html",
    meta: {
      label: "experience.html",
      icon: faFileCode,
      iconColor: "darkorange",
    },
  },
];

export default personalRoutes;
