import { useTagsViewStore } from './tagesView'
/*
 * @Author: fangLong
 * @Date: 2020-12-05 23:42:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-16 11:13:36
 * @FilePath: \vue3-admin-template\src\store\modules\user.ts
 */
import store from '@/store/index'
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import { hotModuleUnregisterModule } from '@/utils/helper/vuexHelper'
import { removeToken4Cookies, setToken2Cookies } from '@/utils/auth'
import { logout } from '@/api/sys/user'
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
  @Action
  async Loginout() {
    try {
      await logout()
      this.commitTokenState('')
      removeToken4Cookies()
      useTagsViewStore.actionDelAllTags()
    } catch {
      console.log('失败')
    }
  }
}
export const userStore = getModule<User>(User)
