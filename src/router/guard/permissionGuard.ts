/*
 * @Author: fangLong
 * @Date: 2020-12-04 22:29:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-07 10:26:35
 * @FilePath: \vue3-admin-template\src\router\guard\permissionGuard.ts
 */

import { Router, RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'
import { getToken4Cookies } from '@/utils/auth'
import { userPermission } from '@/store/modules/permission'
// import { RootRoute } from '../routes'
const whitePageList: PageEnum[] = [PageEnum.BASE_LOGIN]
export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to) => {
    const token = getToken4Cookies()
    if (token) {
      if (to.path === PageEnum.BASE_LOGIN) {
        return { path: '/' }
      } else {
        const hasRoutes = userPermission.getRoutesState && userPermission.getRoutesState.length
        if (hasRoutes) {
          return true
        } else {
          // console.log('null routes', hasRoutes)
          try {
            const routes = await userPermission.generateRoutesAction()
            ;(routes as any[]).forEach(async (route: RouteRecordRaw) => {
              // console.log(route)
              router.addRoute(route)
            })
            return { ...to, replace: true }
          } catch (error) {
            console.log(error)
          }
        }
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
