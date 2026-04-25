import { createVaporApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './styles/index.css'

const app = createVaporApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')
