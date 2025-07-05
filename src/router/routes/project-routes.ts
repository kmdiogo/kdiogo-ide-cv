import Trivialize from "@/views/Projects/Trivialize.vue";
import LAG from "@/views/Projects/LAG.vue";
import Waru from "@/views/Projects/Waru.vue";
import VDIFuse from "@/views/Projects/VDIFuse.vue";
import GeneticFB from "@/views/Projects/GeneticFB.vue";
import SpongeBeats from "@/views/Projects/SpongeBeats.vue";
import { RouteRecordRaw } from "vue-router";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

const projectRoutes: Array<RouteRecordRaw> = [
  {
    path: "/LAG",
    component: LAG,
    name: "LAG.rs",
    meta: {
      label: "LAG.rs",
      icon: faFileCode,
      iconColor: "brown",
    },
  },
  {
    path: "/GeneticFB",
    component: GeneticFB,
    name: "GeneticFB.cs",
    meta: {
      label: "GeneticFB.cs",
      icon: faFileCode,
      iconColor: "mediumpurple",
    },
  },
  {
    path: "/Trivialize",
    component: Trivialize,
    name: "Trivialize.html",
    meta: {
      label: "Trivialize.html",
      icon: faFileCode,
      iconColor: "darkorange",
    },
  },
  {
    path: "/VDIFuse",
    component: VDIFuse,
    name: "VDIFuse.cpp",
    meta: {
      label: "VDIFuse.cpp",
      icon: faFileCode,
      iconColor: "lightblue",
    },
  },
  {
    path: "/SpongeBeats",
    component: SpongeBeats,
    name: "SpongeBeats.cs",
    meta: {
      label: "SpongeBeats.cs",
      icon: faFileCode,
      iconColor: "mediumpurple",
    },
  },
  {
    path: "/Waru",
    component: Waru,
    name: "Waru.cs",
    meta: {
      label: "Waru.cs",
      icon: faFileCode,
      iconColor: "mediumpurple",
    },
  },
];

export default projectRoutes;
