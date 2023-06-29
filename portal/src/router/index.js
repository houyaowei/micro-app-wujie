import { createRouter, createWebHistory } from 'vue-router'
import App1 from '../views/app1.vue'
import App2 from '../views/app2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app1',
      component: App1
    },
    {
      path: '/app2',
      component: App2
    }
  ]
})

export default router
