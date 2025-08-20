import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../../src/views/index.vue"),
        },
        {
            path: "/n",
            name: "number",
            component: () => import("../components/NumberFlapper.vue"),
        },
        {
            path: "/r",
            name: "rou",
            component: () => import("../components/RouterCom.vue"),
        },
        {
            path: "/t",
            name: "test",
            component: () => import("../components/test.vue"),
        },
        {
            path: "/progressBar",
            name: "progressBar",
            component: () => import("../views/progressBar.vue"),
        },
        {
            path: "/luckyDraw",
            name: "luckyDraw",
            component: () => import("../views/lucky-canvas.vue"),
        },
        {
            path: "/webView",
            name: "webView",
            component: () => import("../views/webView.vue"),
        },
        {
            path: "/animation",
            name: "animation",
            component: () => import("@/views/GalaceanEffectsDemo.vue")
        },
    ],
})

export default router
