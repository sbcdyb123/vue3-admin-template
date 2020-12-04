/*
 * @Author: fangLong
 * @Date: 2020-12-04 21:35:57
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-04 23:07:45
 * @FilePath: \vue3-admin-template\src\router\routes\index.ts
 */
import Layout from '@/components/Layout/index.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // name: 'dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/sys/login.vue'),
  },
]
export const baseRoutes = [...routes]
