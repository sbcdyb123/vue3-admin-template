// import { DEFAULT_LAYOUT_COMPONENT } from '@/router/constant'

/*
 * @Author: fangLong
 * @Date: 2020-12-07 01:54:16
 * @LastEditTime: 2020-12-07 08:57:13
 */
const sysRoutes = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/components/Layout/index.vue'),
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/test/home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/test/about.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/components/Layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard-index',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
]

export default sysRoutes
