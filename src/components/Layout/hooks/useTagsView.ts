/*
 * @Author: fangLong
 * @Date: 2020-12-09 19:53:01
 * @LastEditTime: 2020-12-11 11:16:36
 */
import { computed, onMounted, ref, unref, watch } from 'vue'
import { useRoute } from 'vue-router'
import path from 'path'

import { userPermission } from '@/store/modules/permission'

import { AppRouteRecordRaw, RouteMeta } from '@/router/type'
import { useTagsViewStore } from '@/store/modules/tagesView'
import { useGo } from '@/hooks/web/usePage'

export interface Tag {
  fullPath: string
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
          fullPath: tagPath,
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
    const { name, fullPath, path, meta } = route
    if (name) {
      const tag: Tag = {
        name: unref(name) as string,
        fullPath: unref(fullPath),
        path: unref(path),
        meta: unref(meta) as RouteMeta,
      }
      useTagsViewStore.actionAddTags(tag)
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
  function handleTagChange(activeKey: string) {
    const go = useGo()
    go(activeKey)
  }
  function handleEdit(targetKey: string): void {
    useTagsViewStore.actionDeltag(targetKey)
  }
  const activeKeyRef = ref('')
  const visitedTags = computed(() => useTagsViewStore.getVisibleTagsState)
  const cachedTages = computed(() => useTagsViewStore.getCachedTagesState)
  const routeFullPath = computed(() => route.fullPath)

  watch(
    routeFullPath,
    () => {
      addTags()
      const { fullPath, name } = route
      name &&
        useTagsViewStore.actionUpdateTags({ name, fullPath } as { name: string; fullPath: string })
      activeKeyRef.value = fullPath
    },
    { deep: false, immediate: true }
  )
  onMounted(() => {
    initTags()
    addTags()
  })
  return {
    visitedTags,
    cachedTages,
    isAffix,
    handleTagChange,
    activeKeyRef,
    handleEdit,
  }
}
