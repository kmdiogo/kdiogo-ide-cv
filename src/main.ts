// Vue/Components
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from "./store"

// Other
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
    faFileCode, faFileAlt, faChevronDown,
    faFolder, faChevronRight, faTerminal,
    faBoxOpen
} from "@fortawesome/free-solid-svg-icons";

// Non-js
import './styles/index.pcss'

library.add(
    faWindowClose, faFileCode, faFileAlt,
    faChevronDown, faFolder, faChevronRight,
    faTerminal, faLinkedin, faGithubSquare,
    faBoxOpen
)

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
