import { createApp } from 'vue'
import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Form, Field } from 'vant';
import { Search } from 'vant';
import { Icon } from 'vant'
import { Notify } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Col, Row } from 'vant';
import { Popup } from 'vant';
import { DatePicker } from 'vant';
import { Picker } from 'vant';
import { Dialog } from 'vant';
import 'vant/lib/index.css';
import router from './router'
import api from './api'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$api = api
app.use(Button)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Icon);
app.use(Search);
app.use(Swipe);
app.use(SwipeItem);
app.use(VanImage);
app.use(Cell);
app.use(Col);
app.use(Row);
app.use(Picker);
app.use(Popup);
app.use(DatePicker);
app.use(Notify);
app.use(Dialog);
app.use(router)
app.mount('#app')
