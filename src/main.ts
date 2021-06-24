import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './mock';

import ElementPlus from 'element-plus';
import { VueAxios } from '@/utils/request';
import router from '@/router/index';
import antdIcon from './core/antdv_icon';
import i18n from './i18n'

const app = createApp(App)

app.use(i18n);
app.use(antdIcon);
app.use(router);
app.use(VueAxios);
app.use(ElementPlus);

app.mount('#app');

