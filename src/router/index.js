import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeCom from '@/views/HomeCom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeCom
    },
  ]
})

export default router
