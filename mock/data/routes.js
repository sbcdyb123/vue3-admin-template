/*
 * @Date: 2020-12-16 09:11:36
 * @LastEditTime: 2020-12-16 10:51:39
 * @Description:
 */
const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: 'views/redirect/index.vue',
      },
    ],
  },
  {
    path: '/404',
    component: 'views/error-page/NotFound.vue',
    hidden: true,
  },
  {
    path: '/401',
    component: 'views/error-page/401.vue',
    hidden: true,
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: 'views/sys/login.vue',
  },
]

const asyncRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: 'Layout',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: 'views/dashboard/index',
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
    component: 'Layout',
    redirect: '/test/home',
    meta: {
      icon: 'documentation',
      title: 'test',
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: 'views/test/home',
        meta: {
          icon: 'documentation',
          title: 'home',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: 'views/test/about',
        meta: {
          icon: 'form',
          title: 'about',
        },
      },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
]
const routes = [...asyncRoutes]
module.exports = routes
