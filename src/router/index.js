<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
=======
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeCom from '@/views/HomeCom.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802
  routes: [
    {
      path: '/',
      name: 'home',
<<<<<<< HEAD
      component: ()=>import('../../src/views/index.vue')
    },
    {
      path: '/n',
      name: 'number',
      component: ()=>import('../components/NumberFlapper.vue')
    },
    {
      path: '/r',
      name: 'rou',
      component: ()=>import('../components/RouterCom.vue')
    },
    {
      path: '/t',
      name: 'test',
      component: ()=>import('../components/test.vue')
    }
=======
      component: HomeCom
    },
>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802
  ]
})

export default router
