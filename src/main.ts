import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./styles/index.css";

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
