/*
 * @Author: fangLong
 * @Date: 2020-12-07 01:37:53
 * @LastEditTime: 2020-12-16 10:31:39
 */
import store from '@/store/index'
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import { hotModuleUnregisterModule } from '@/utils/helper/vuexHelper'
import projectSetting from '@/setting/projectSetting'
import { permissionModeEnum } from '@/enums/appEnum'
import { message } from 'ant-design-vue'
import { asyncRoutes, baseRoutes } from '@/router/routes'
import { filterAsyncRouter, filterRoutes } from '@/utils/helper/routes'
import { getRoutes } from '@/api/sys/user'
const NAME = 'permission'
hotModuleUnregisterModule(NAME)

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Permission extends VuexModule {
  // token
  private routes: any[] = []
  get getRoutesState() {
    return this.routes
  }
  @Mutation
  commitRoutesState(route: any[]): void {
    this.routes = route
  }
  @Action
  generateRoutesAction() {
    return new Promise((resolve, reject) => {
      try {
        let routes
        if (projectSetting.permissionMode === permissionModeEnum.BackEnd) {
          // console.log('后端加载路由')
          getRoutes().then((res) => {
            const asyncRoutes = filterAsyncRouter(res.response)
            routes = [...baseRoutes, ...asyncRoutes]
            const finallyRoutes = filterRoutes(routes)
            this.commitRoutesState(finallyRoutes)
            resolve(finallyRoutes)
          })
        } else {
          routes = [...baseRoutes, ...asyncRoutes]
          const finallyRoutes = filterRoutes(routes)
          this.commitRoutesState(finallyRoutes)
          resolve(asyncRoutes)
        }
      } catch (error) {
        message.error('路由加载失败')
        reject(error)
      }
    })
  }
}

export const userPermission = getModule<Permission>(Permission)
