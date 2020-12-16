/*
 * @Date: 2020-12-15 09:47:32
 * @LastEditTime: 2020-12-16 08:58:01
 * @Description:
 */
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGo } from '@/hooks/web/usePage'
function isDashboard(route: any) {
  const name = route && route.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}
function getBreadcrumb(route: any): any {
  let matched: any = route.matched.filter(
    (item: { meta: { title: any } }) => item.meta && item.meta.title
  )
  const first = matched[0]
  if (!isDashboard(first)) {
    matched = [{ path: '/dashboard', meta: { title: 'dashboard' } }].concat(matched)
  }
  const levelList = matched.filter(
    (item: { meta: { title: string; breadcrumb: boolean } }) =>
      item.meta && item.meta.title && item.meta.breadcrumb !== false
  )
  return levelList
}
export function useBreadcurmb() {
  const route = useRoute()
  const fullPath = computed(() => route.fullPath)
  // console.log(fullPath)

  const levelList = ref([])
  watch(
    fullPath,
    () => {
      levelList.value = getBreadcrumb(route)
    },
    { immediate: true }
  )
  const go = useGo()
  return {
    levelList,
    go,
  }
}
