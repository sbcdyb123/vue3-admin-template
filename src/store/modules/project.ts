/*
 * @Date: 2020-12-09 14:23:29
 * @LastEditTime: 2020-12-09 14:49:33
 * @Description: 项目相关
 */
import store from '@/store/index'
import { VuexModule, Module, getModule, Mutation } from 'vuex-module-decorators'
import { hotModuleUnregisterModule } from '@/utils/helper/vuexHelper'
const NAME = 'project'
hotModuleUnregisterModule(NAME)

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Project extends VuexModule {
  // 控制菜单栏缩放
  private collapsedState = false
  get getCollapsedState(): boolean {
    return this.collapsedState
  }
  @Mutation
  commitCollapsedState(collapsed: boolean): void {
    this.collapsedState = collapsed
    console.log(this.collapsedState)
  }
}
export const useProject = getModule<Project>(Project)
