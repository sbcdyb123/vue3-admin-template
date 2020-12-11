/*
 * @Author: fangLong
 * @Date: 2020-12-09 19:49:58
 * @LastEditTime: 2020-12-11 11:14:55
 */
import store from '@/store/index'
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import { hotModuleUnregisterModule } from '@/utils/helper/vuexHelper'
import { Tag } from '@/components/Layout/hooks/useTagsView'
import { assign } from 'lodash-es'
const NAME = 'TagsView'
hotModuleUnregisterModule(NAME)

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class TagsView extends VuexModule {
  // 可访问的缓存路由
  private visitedTags: Tag[] = []
  get getVisibleTagsState(): Tag[] {
    return this.visitedTags
  }
  // 已缓存路由
  private cachedTages: string[] = []
  get getCachedTagesState(): string[] {
    return this.cachedTages
  }
  /**
   * @description: 添加可访问的缓存路由
   * @param {Tag} visibleTag
   * @return {*}
   */
  @Mutation
  addVisitedTag(tag: Tag): void {
    if (this.visitedTags.some((t) => t.name === tag.name)) return
    this.visitedTags.push(assign({}, tag, { title: tag.meta.title || 'no-name' }))
  }
  @Mutation
  addCachedTag(tag: Tag): void {
    if (this.cachedTages.includes(tag.name)) return
    this.cachedTages.push(tag.name)
  }
  @Mutation
  delVisitedTag(tag: Tag) {
    for (const [i, v] of this.visitedTags.entries()) {
      if (v.name === tag.name) {
        this.visitedTags.splice(i, 1)
        break
      }
    }
  }
  @Mutation
  delCachedTag(tag: Tag) {
    const index = this.cachedTages.indexOf(tag.name)
    index > -1 && this.cachedTages.splice(index, 1)
  }
  @Mutation
  delOthersVisitedTags(tag: Tag) {
    this.visitedTags = this.visitedTags.filter((t) => {
      return t.meta.affix || t.name === tag.name
    })
  }
  @Mutation
  delOthersCachedTags(tag: Tag) {
    const index = this.cachedTages.indexOf(tag.name)
    if (index > -1) {
      this.cachedTages = this.cachedTages.slice(index, index + 1)
    } else {
      // if index = -1, there is no cached tags
      this.cachedTages = []
    }
  }
  @Mutation
  delAllVisitedTags() {
    const affixTags = this.visitedTags.filter((tag) => tag.meta.affix)
    this.visitedTags = affixTags
  }
  @Mutation
  delAllCachedTags() {
    this.cachedTages = []
  }
  @Mutation
  updateVisitedTags(tag: Tag) {
    for (let v of this.visitedTags) {
      if (tag.name === v.name) {
        v = assign(v, tag)
        break
      }
    }
  }
  @Action
  actionAddTags(tag: Tag) {
    this.actionAddCTag(tag)
    this.actionAddVTag(tag)
  }
  @Action
  actionAddVTag(tag: Tag) {
    this.addVisitedTag(tag)
  }
  @Action
  actionAddCTag(tag: Tag) {
    this.addCachedTag(tag)
  }
  @Action
  async actionDeltag(fullPath: string) {
    const tag = this.visitedTags.find((t) => t.fullPath === fullPath)
    tag && (await this.actionDelVTag(tag))
    tag && (await this.actionDelCTag(tag))
    return {
      visitedTags: [...this.visitedTags],
      cachedTages: [...this.cachedTages],
    }
  }
  @Action
  actionDelVTag(tag: Tag) {
    return new Promise((reslove) => {
      this.delVisitedTag(tag)
      reslove([...this.visitedTags])
    })
  }
  @Action
  actionDelCTag(tag: Tag) {
    return new Promise((reslove) => {
      this.delCachedTag(tag)
      reslove([...this.cachedTages])
    })
  }
  @Action
  async actionsDelOtherTags(tag: Tag) {
    await this.actionDelOtherVTags(tag)
    await this.actionDelOtherCTags(tag)
    return {
      visitedTags: [...this.visitedTags],
      cachedTages: [...this.cachedTages],
    }
  }
  @Action
  async actionDelOtherVTags(tag: Tag) {
    this.delOthersVisitedTags(tag)
    return [...this.visitedTags]
  }
  @Action
  async actionDelOtherCTags(tag: Tag) {
    this.delOthersCachedTags(tag)
    return [...this.cachedTages]
  }
  @Action
  async actionDelAllTags() {
    await this.actionDelAllVTags()
    await this.actionDelAllCTags()
    return {
      visitedTags: [...this.visitedTags],
      cachedTages: [...this.cachedTages],
    }
  }
  @Action
  async actionDelAllVTags() {
    this.delAllVisitedTags()
    return [...this.visitedTags]
  }
  @Action
  async actionDelAllCTags() {
    this.delAllCachedTags()
    return [...this.cachedTages]
  }
  @Action
  actionUpdateTags({ name, fullPath }: { name: string; fullPath: string }) {
    const tag = assign(
      {},
      this.visitedTags.find((t) => t.name === name)
    )
    if (tag) {
      this.updateVisitedTags(assign(tag, { fullPath }) as Tag)
    }
  }
}
export const useTagsViewStore = getModule<TagsView>(TagsView)