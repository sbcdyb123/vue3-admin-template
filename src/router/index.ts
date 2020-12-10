/*
 * @Author: fangLong
 * @Date: 2020-12-03 18:37:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-10 16:19:26
 * @FilePath: \vue3-admin-template\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'
import { baseRoutes } from './routes'
import { scrollBehavior } from './scrollBehaviour'
import { createGuard } from './guard'

// import Home from '../views/Home.vue';
// const routes = [
//   {
//     path: '/',
//     name: 'layout',
//     redirect: 'home',
//     component: () => import('@/views/test/layout.vue'),
//     children: [
//       {
//         path: 'home',
//         component: () => import('@/views/test/home.vue'),
//       },
//       {
//         path: 'about',
//         component: () => import('@/views/test/about.vue'),
//       },
//     ],
//   },
// ]
// const addRoute = {
//   path: 'addRoute',
//   component: () => import('@/views/test/addRoute.vue'),
// }
export const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: baseRoutes,
  scrollBehavior: scrollBehavior,
})
// router.addRoute('layout', addRoute)
export function setRouter(app: App<Element>) {
  app.use(router)
  createGuard(router)
}

// export default router
