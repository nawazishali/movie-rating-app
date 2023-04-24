import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueFeather from 'vue-feather';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component(VueFeather.name, VueFeather);

app.mount('#app')
