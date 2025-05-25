import { createApp } from 'vue'
import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import 'vant/lib/index.css';
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(router)
app.mount('#app')
