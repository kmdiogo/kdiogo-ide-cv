import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as requiredIcons from "@/icons";

import "./styles/index.css";

// Add all icons defined in the icons module into the font-awesome Vue library
library.add(...Object.values(requiredIcons));

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
