/*
 * @Author: fangLong
 * @Date: 2020-12-04 22:29:33
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-04 23:17:48
 * @FilePath: \vue3-admin-template\src\router\guard\permissionGuard.ts
 */

import { Router } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'
const whitePageList: PageEnum[] = [PageEnum.BASE_LOGIN]
export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to) => {
    const token = ''
    if (token) {
      if (to.path === PageEnum.BASE_LOGIN) {
        router.push({ path: '/' })
        return true
      }
    } else {
      if (whitePageList.includes(to.path as PageEnum)) {
        return true
      } else {
        const redirectData: {
          path: string
          replace: boolean
          query?: { [key: string]: string }
        } = {
          path: PageEnum.BASE_LOGIN,
          replace: true,
        }
        if (to.path) {
          redirectData.query = {
            ...redirectData.query,
            redirect: to.path,
          }
        }
        router.push(redirectData)
      }
    }
  })
}
