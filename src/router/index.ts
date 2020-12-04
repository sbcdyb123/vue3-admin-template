/*
 * @Author: fangLong
 * @Date: 2020-12-03 18:37:34
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-04 23:02:07
 * @FilePath: \vue3-admin-template\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'
import { baseRoutes } from './routes'
import { scrollBehavior } from './scrollBehaviour'
import { createGuard } from './guard'

// import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: baseRoutes,
  scrollBehavior: scrollBehavior,
})
export function setRouter(app: App<Element>) {
  app.use(router)
  createGuard(router)
}

// export default router
