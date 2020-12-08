/*
 * @Author: fangLong
 * @Date: 2020-12-04 21:35:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-08 18:50:09
 * @FilePath: \vue3-admin-template\src\router\routes\index.ts
 */

// import { RouteRecordRaw } from 'vue-router'
import sysRoutes from './modules/sys'

const routes = [
  // {
  //   path: '/',
  //   name: 'Dashboard',
  //   component: () => import('@/components/Layout/index.vue'),
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'dashboard-index',
  //       component: () => import('@/views/dashboard/index.vue'),
  //     },
  //   ],
  // },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/sys/login.vue'),
  },
]

export const asyncRoutes = [...sysRoutes]
export const baseRoutes = [...routes]
