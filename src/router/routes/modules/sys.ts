// import { DEFAULT_LAYOUT_COMPONENT } from '@/router/constant'

/*
 * @Author: fangLong
 * @Date: 2020-12-07 01:54:16
 * @LastEditTime: 2020-12-10 01:32:09
 */
const sysRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/components/Layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          icon: 'dashboard',
          title: 'dashboard',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/components/Layout/index.vue'),
    redirect: '/test/home',
    meta: {
      icon: 'documentation',
      title: 'test',
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/test/home.vue'),
        meta: {
          icon: 'documentation',
          title: 'home',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/test/about.vue'),
        meta: {
          icon: 'form',
          title: 'about',
        },
      },
    ],
  },
]

export default sysRoutes
