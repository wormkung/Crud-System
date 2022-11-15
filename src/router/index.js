import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dataviwe',
    name: 'dataviwe',
    component: () => import('../views/dataviwe.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/post.vue')
  },
  {
    path: '/edit/:id?',
    name: 'edit',
    component: () => import('../views/edit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
