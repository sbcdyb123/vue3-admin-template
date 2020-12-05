/*
 * @Author: fangLong
 * @Date: 2020-12-05 23:42:58
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-06 04:29:17
 * @FilePath: \vue3-admin-template\src\store\modules\user.ts
 */
import store from '@/store/index'
import { VuexModule, Module, getModule, Mutation } from 'vuex-module-decorators'
import { hotModuleUnregisterModule } from '@/utils/helper/vuexHelper'
import { setToken2Cookies } from '@/utils/auth'
const NAME = 'user'
hotModuleUnregisterModule(NAME)

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class User extends VuexModule {
  // token
  private tokenState = ''
  @Mutation
  commitTokenState(token: string): void {
    this.tokenState = token
    setToken2Cookies(token)
  }
}
export const userStore = getModule<User>(User)
