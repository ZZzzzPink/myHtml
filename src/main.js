import './assets/css/base.css'
import './assets/fonts/font.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 视差组件
import VueKinesis from "vue-kinesis";
// 点击交互组件
import VWave from 'v-wave'


import vant from 'vant'
import 'vant/lib/index.css'



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueKinesis);
app.use(VWave);
app.use(createPinia())
app.use(router)
app.use(vant)

app.mount('#app')
