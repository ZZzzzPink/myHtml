import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
    }
  ]
})

export default router
