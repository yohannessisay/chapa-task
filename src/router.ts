import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Disputes from './views/Disputes.vue'

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'Home',
    component: Dashboard,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/disputes',
    name: 'Disputes',
    component: Disputes,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
