import Trivialize from "@/views/Projects/Trivialize.vue";
import LAG from "@/views/Projects/LAG.vue";
import Waru from "@/views/Projects/Waru.vue";
import VDIFuse from "@/views/Projects/VDIFuse.vue";
import GeneticFB from "@/views/Projects/GeneticFB.vue";
import SpongeBeats from "@/views/Projects/SpongeBeats.vue";
import { RouteRecordRaw } from "vue-router";

const projectRoutes: Array<RouteRecordRaw> = [
  {
    path: "/LAG",
    component: LAG,
    name: "LAG.cpp",
    meta: {
      label: "LAG.cpp",
      icon: "fas file-code",
      iconColor: "lightblue",
    },
  },
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
    path: "/VDIFuse",
    component: VDIFuse,
    name: "VDIFuse.cpp",
    meta: {
      label: "VDIFuse.cpp",
      icon: "fas file-code",
      iconColor: "lightblue",
    },
  },
  {
    path: "/SpongeBeats",
    component: SpongeBeats,
    name: "SpongeBeats.cs",
    meta: {
      label: "SpongeBeats.cs",
      icon: "fas file-code",
      iconColor: "mediumpurple",
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
