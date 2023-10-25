import './assets/style.scss'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

import '@/assets/theme.css'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.component('ProgressBar', ProgressBar)
app.component('ButtonComponent', Button)

app.mount('#app')
