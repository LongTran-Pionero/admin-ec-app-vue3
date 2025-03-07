import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import middlewarePipeline from '@/middleware/middlewarePipeline'
import { useAuthStore } from '@/stores/auth.store'

const router = createRouter({
  history: createWebHistory('/admin-ec-app-vue3'),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : []

  if (!middleware.length) {
    return next()
  }

  const context = { to, from, next, authStore }
  return middlewarePipeline(context, middleware, 0)
})

export default router
