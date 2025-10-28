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

import Pixelium from '@pixelium/web-vue'
import '@pixelium/web-vue/dist/pixelium-vue.css'
// Import the font
import '@pixelium/web-vue/dist/font.css'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

// 颜色拾取器
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

// pinia持久化插件
import piniaPersist from 'pinia-plugin-persist'

process.env.NODE_ENV !== "production" && updateBuild.start()

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)
app.config.globalProperties.$test = request
app.use(Vant)
app.use(VueVideoPlayer)
app.use(ElementPlus)
app.use(Antd)
app.use(Pixelium)
app.use(pinia)
app.use(Vue3ColorPicker)
app.use(router)

app.mount("#app")
