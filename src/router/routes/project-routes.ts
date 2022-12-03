import Trivialize from "@/views/Projects/Trivialize.vue";
//import LAG from "@/views/Projects/LAG.vue"
import Waru from "@/views/Projects/Waru.vue";
import Ext2EC from "@/views/Projects/Ext2EC.vue";
import GeneticFB from "@/views/Projects/GeneticFB.vue";
import { RouteRecordRaw } from "vue-router";

const projectRoutes: Array<RouteRecordRaw> = [
  // {
  //     path: '/LAG',
  //     component: LAG,
  //     name: 'LAG.cpp',
  //     meta: {
  //         label: 'LAG.cpp',
  //         icon: 'fas file-code',
  //         iconColor: 'lightblue',
  //     }
  // },
  {
    path: "/GeneticFB",
    component: GeneticFB,
    name: "GeneticFB.cs",
    meta: {
      label: "GeneticFB.cs",
      icon: "fas file-code",
      iconColor: "mediumpurple",
    },
  },
  {
    path: "/Trivialize",
    component: Trivialize,
    name: "Trivialize.html",
    meta: {
      label: "Trivialize.html",
      icon: "fas file-code",
      iconColor: "darkorange",
    },
  },
  {
    path: "/IntegrityChecker",
    component: Ext2EC,
    name: "Ext2EC.cc",
    meta: {
      label: "Ext2EC.cc",
      icon: "fas file-code",
      iconColor: "lightblue",
    },
  },
  {
    path: "/Waru",
    component: Waru,
    name: "Waru.cs",
    meta: {
      label: "Waru.cs",
      icon: "fas file-code",
      iconColor: "mediumpurple",
    },
  },
];

export default projectRoutes;
