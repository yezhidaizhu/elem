import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './mock';

import ElementPlus from 'element-plus';
import { VueAxios } from '@/utils/request'

const app = createApp(App)

app.use(VueAxios);
app.use(ElementPlus);

app.mount('#app');

