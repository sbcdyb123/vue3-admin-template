// import { DEFAULT_LAYOUT_COMPONENT } from '@/router/constant'

/*
 * @Author: fangLong
 * @Date: 2020-12-07 01:54:16
 * @LastEditTime: 2020-12-07 07:07:30
 */
const sysRoutes = {
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
}

export default sysRoutes
