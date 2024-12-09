import { createRouter, createWebHistory } from 'vue-router'
import Login_page from '@/views/Login_page.vue'
import Forgot_password from '@/views/Forgotpassword_page.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/login',
      name: 'login',
      component: Login_page,
    },
    {
      path: '/forgot_password',
      name: 'forgot_password',
      component: Forgot_password,
    },
  ],
})

export default router
