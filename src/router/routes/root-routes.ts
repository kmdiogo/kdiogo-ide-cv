import Welcome from "@/views/Welcome.vue";
import README from "@/views/README.vue";
import { RouteRecordRaw } from "vue-router";
import Resume from "@/views/Resume.vue";

const rootRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Welcome,
    name: "Welcome.html",
    meta: {
      label: "Welcome.html",
      icon: "fas file-code",
      iconColor: "darkorange",
    },
  },
  {
    path: "/Resume",
    component: Resume,
    name: "Resume.pdf",
    meta: {
      label: "Resume.pdf",
      icon: "fas file-pdf",
      iconColor: "#ff0000",
      noPadding: true
    },
  },
  {
    path: "/README",
    component: README,
    name: "README.md",
    meta: {
      label: "README.md",
      icon: "fas file-alt",
    },
  },
];

export default rootRoutes;
