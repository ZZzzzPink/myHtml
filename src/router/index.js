import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
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
            path:'/webView',
            name: 'webView',
            component: () => import('../views/webView.vue')
        },
        {
            path:'/vueUse',
            name: 'vueUse',
            component: () => import('../views/vueUse.vue')
        },
        {
            path: '/videoRecorder',
            name: 'videoRecorder',
            component: () => import('../views/VideoRecorder.vue')
        },
        {
            path: '/cameraRecorder',
            name: 'cameraRecorder',
            component: () => import('../views/CameraRecorder.vue')
        },
        {
            path: '/esign',
            name: 'esign',
            component: () => import('../views/esign.vue')
        },
        {
            path: '/particle',
            name: 'particle',
            component: () => import('../views/ParticleSystem.vue')
        },
        {
            path: '/music',
            name: 'musicHome',
            component: () => import('../views/music/Home.vue'),
            meta: { title: '音乐首页' }
        },
        {
            path: '/music/search',
            name: 'musicSearch',
            component: () => import('../views/music/Search.vue'),
            meta: { title: '音乐搜索' }
        },
        {
            path: '/music/player',
            name: 'musicPlayer',
            component: () => import('../views/music/Player.vue'),
            meta: { title: '音乐播放器' }
        },
        {
            path: '/music/ranking',
            name: 'musicRanking',
            component: () => import('../views/music/Ranking.vue'),
            meta: { title: '音乐排行榜' }
        }
    ],
})

export default router
