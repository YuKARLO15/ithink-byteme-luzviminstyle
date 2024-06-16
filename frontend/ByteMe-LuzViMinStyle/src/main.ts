//import './assets/main.css'
import './assets/global.css'
//import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
//import 'https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
