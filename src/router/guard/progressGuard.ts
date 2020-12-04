/*
 * @Author: fangLong
 * @Date: 2020-12-04 22:24:14
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-04 22:46:21
 * @FilePath: \vue3-admin-template\src\router\guard\progressGuard.ts
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Router } from 'vue-router'
NProgress.configure({ showSpinner: false })
export function createProgressGuard(router: Router) {
  router.beforeEach(async () => {
    NProgress.start()
    return true
  })
  router.afterEach(async () => {
    NProgress.done()
  })
}
