<<<<<<< HEAD
// import './assets/main.css'
import "virtual:uno.css"
import "video.js/dist/video-js.css"
import updateBuild from "./utils/update-build"
import request from "./api/request"
import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import Antd from "ant-design-vue"
import "ant-design-vue/dist/reset.css"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import Vant from "vant"
import "vant/lib/index.css"

process.env.NODE_ENV !== "production" && updateBuild.start()
const app = createApp(App)
app.config.globalProperties.$test = request
app.use(Vant)
app.use(ElementPlus)
app.use(Antd)
app.use(createPinia())
app.use(router)

app.mount("#app")
=======
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
>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802
