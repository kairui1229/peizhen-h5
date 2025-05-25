import { createApp } from 'vue'
import './style.css'
import { Button } from 'vant';
import 'vant/lib/index.css';
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.use(router)
app.mount('#app')
