import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import { nextTick } from 'vue'

const scrollBehavior: RouterScrollBehavior = async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    await nextTick() // Wait for the next DOM update cycle
    const element = document.querySelector(to.hash)
    if (element) {
      // Use `behavior: 'smooth'` for smooth scrolling
      element.scrollIntoView({ behavior: 'smooth' })
      return { el: to.hash }
    } else {
      // Fallback to top of the page if element not found
      return { top: 0 }
    }
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    }
  ]
})

export default router
