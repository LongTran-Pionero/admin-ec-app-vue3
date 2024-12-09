import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Forgot_password from '@/views/Forgot_password.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/forgot_password',
      name: 'forgot_password',
      component: Forgot_password,
    },
  ],
})

export default router
