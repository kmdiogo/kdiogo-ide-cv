// Vue/Components
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";

// Other
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWindowClose, faTimesCircle as farTimesCircle } from "@fortawesome/free-regular-svg-icons";
import {
    faLinkedin, faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import {
    faFileCode, faFileAlt, faChevronDown,
    faFolder, faChevronRight, faTerminal,
    faBoxOpen, faTimesCircle, faQuestion
} from "@fortawesome/free-solid-svg-icons";

// Non-js
import './styles/index.pcss'

library.add(
    faWindowClose, faFileCode, faFileAlt,
    faChevronDown, faFolder, faChevronRight,
    faTerminal, faLinkedin, faGithubSquare,
    faBoxOpen, faTimesCircle, farTimesCircle,
    faQuestion
)

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
