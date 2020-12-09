/*
 * @Author: fangLong
 * @Date: 2020-12-09 19:53:01
 * @LastEditTime: 2020-12-10 01:47:32
 */
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import path from 'path'

import { userPermission } from '@/store/modules/permission'

import { AppRouteRecordRaw, RouteMeta } from '@/router/type'
import { useTagsViewStore } from '@/store/modules/tagesView'

export interface Tag {
  fullpath: string
  path: string
  name: string
  meta: RouteMeta
}

/**
 * @description: 缓存标签hook
 * @param {*}
 * @return {*}
 */
export function useTagsView() {
  // 项目中所有的路由
  const routes = userPermission.getRoutesState
  const route = useRoute()
  /**
   * @description: 过滤固钉路由
   * @param {AppRouteRecordRaw} routes
   * @param {*} basePath
   * @return {*}
   */
  function filterAffixTags(routes: AppRouteRecordRaw[], basePath = '/') {
    let tags: Tag[] = []
    routes.forEach((route) => {
      if (route.meta && route.meta.affix) {
        const tagPath: string = path.resolve(basePath)
        tags.push({
          fullpath: tagPath,
          path: tagPath,
          name: route.name,
          meta: { ...route.meta },
        })
      }
      if (route.children) {
        const tempTags = filterAffixTags(route.children, route.path)
        if (tempTags.length >= 1) {
          tags = [...tags, ...tempTags]
        }
      }
    })
    return tags
  }
  //
  /**
   * @description: 初始化固钉子路由
   * @param {*}
   * @return {*}
   */
  function initTags() {
    const affixTags = filterAffixTags(routes)
    for (const tag of affixTags) {
      //必须要有name
      if (tag.name) {
        useTagsViewStore.actionAddVTag(tag)
      }
    }
  }
  /**
   * @description: 添加标签(必须要有名字)
   * @param {*}
   * @return {*}
   */
  function addTags() {
    const { name } = route
    if (name) {
      console.log(name)

      useTagsViewStore.actionAddTags(route as any)
    }
  }
  /**
   * @description: 是否为固钉
   * @param {Tag} tag
   * @return {*}
   */
  function isAffix(tag: Tag) {
    return tag.meta && tag.meta.affix
  }
  const visitedTags = computed(() => useTagsViewStore.getVisibleTagsState)
  watch(route, () => {
    console.log(route)

    addTags()
    console.log(visitedTags)
  })
  onMounted(() => {
    initTags()
    addTags()
  })
  return {
    visitedTags,
    isAffix,
  }
}
