import Welcome from "@/views/Welcome.vue";
import README from "@/views/README.vue";
import { RouteRecordRaw } from "vue-router";
import Resume from "@/views/Resume.vue";
import {
  faFileAlt,
  faFileCode,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const rootRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Welcome,
    name: "Welcome.html",
    meta: {
      label: "Welcome.html",
      icon: faFileCode,
      iconColor: "darkorange",
    },
  },
  {
    path: "/Resume",
    component: Resume,
    name: "Resume.pdf",
    meta: {
      label: "Resume.pdf",
      icon: faFilePdf,
      iconColor: "#ff0000",
      noPadding: true,
    },
  },
  {
    path: "/README",
    component: README,
    name: "README.md",
    meta: {
      label: "README.md",
      icon: faFileAlt,
    },
  },
];

export default rootRoutes;
