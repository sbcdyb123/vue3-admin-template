/*
 * @Author: fangLong
 * @Date: 2020-12-04 21:35:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-17 13:27:39
 * @FilePath: \vue3-admin-template\src\router\routes\index.ts
 */

// import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import sysRoutes from './modules/sys'
const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/NotFound.vue'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true,
  },
  {
    path: '/login',
    hidden: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/sys/login.vue'),
  },
]

export const asyncRoutes = [
  ...sysRoutes, // 404 page must be placed at the end !!!
  { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
]
export const baseRoutes = [...routes]
