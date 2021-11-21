import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/republic',
    name: 'Republic',
    component: () => import('../views/Republic.vue')
  },
  {
    path: '/region/:id',
    name: 'Region',
    component: () => import('../views/Region.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
