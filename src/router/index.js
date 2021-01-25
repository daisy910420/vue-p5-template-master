import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/example1.vue')
  },
  {
    path: '/example2',
    name: '科藝',
    component: () => import('../views/example2.vue')
  },
  {
    path: '/example3',
    name: '學士班',
    component: () => import('../views/example3.vue')
  },
  {
    path: '/example4',
    name: '招生',
    component: () => import('../views/example4.vue')
  },{
    path: '/example5',
    name: '聯絡',
    component: () => import('../views/example5.vue')
  },
  {
    path: '/example2-3',
    name: '動力藝術',
    component: () => import('../views/example2-3.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
