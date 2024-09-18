// import './assets/main.css'
// main.ts
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import Vant from 'vant'
import 'vant/lib/index.css';


const app = createApp(App)

app.use(Vant)
app.use(ElementPlus)
app.use(Antd)
app.use(createPinia())
app.use(router)

app.mount('#app')
