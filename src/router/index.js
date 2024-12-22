import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
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
      name: 'rou',
      component: ()=>import('../components/RouterCom.vue')
    },
    {
      path: '/t',
      name: 'test',
      component: ()=>import('../components/test.vue')
    }
  ]
})

export default router
