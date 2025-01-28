<!-- main.js -->
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import NaiveUI from 'naive-ui'

const app = createApp(App)
app.use(createPinia())
app.use(NaiveUI)
app.mount('#app')
