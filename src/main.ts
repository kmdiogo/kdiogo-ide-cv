// Vue/Components
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Other
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWindowClose,
  faTimesCircle as farTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileCode,
  faFileAlt,
  faChevronDown,
  faFolder,
  faChevronRight,
  faTerminal,
  faBoxOpen,
  faTimesCircle,
  faQuestion,
  faLongArrowAltDown,
  faBars,
  faTimes,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

// Non-js
import "./styles/index.pcss";

library.add(
  faWindowClose,
  faFileCode,
  faFileAlt,
  faChevronDown,
  faFolder,
  faChevronRight,
  faTerminal,
  faLinkedin,
  faGithubSquare,
  faBoxOpen,
  faTimesCircle,
  farTimesCircle,
  faQuestion,
  faGithub,
  faLongArrowAltDown,
  faBars,
  faTimes,
  faFilePdf
);

const app = createApp(App);
app.use(router);
app.use(createPinia());

// Custom directives
app.directive("click-outside", {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event: PointerEvent) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent, true);
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent, true);
  },
});

app.mount("#app");
