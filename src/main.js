import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createPinia } from 'pinia'
import { router } from './router/router'
import './style.css'
import App from './App.vue'
const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.use(router)
app.use(plugin, defaultConfig).mount('#app')
