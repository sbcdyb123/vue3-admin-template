import { isExternal } from '../validators'
import Layout from '@/components/Layout/index.vue'
const _import = (file: string) => require('@/' + file + '.vue').default
/*
 * @Author: fangLong
 * @Date: 2020-12-08 23:33:10
 * @LastEditTime: 2020-12-16 10:52:55
 */
import path from 'path'
export function filterRoutes(routes: any[], baseUrl = '/') {
  return routes.map((route) => {
    if (route.path !== '*' && !isExternal(route.path))
      route.path = path.resolve(baseUrl, route.path)
    route.fullPath = route.path
    if (route.children) route.children = filterRoutes(route.children, route.fullPath)
    return route
  })
}
export function filterAsyncRouter(asyncRouterMap: any) {
  //注意这里的 asyncRouterMap 是一个数组
  const accessedRouters = asyncRouterMap.filter((route: any) => {
    if (route.path && !route.IsButton) {
      if (route.path === '/:pathMatch(.*)*') {
        return true
      }
      if (route.component === 'Layout') {
        //Layout组件特殊处理
        route.component = Layout
      } else {
        try {
          route.component = _import(route.component.replace('/:id', ''))
        } catch (e) {
          try {
            route.component = () => import('@/' + route.component.replace('/:id', '') + '.vue')
          } catch (error) {
            //console.info('%c 当前路由 ' + route.path.replace('/:id','') + '.vue 不存在，因此如法导入组件，请检查接口数据和组件是否匹配，并重新登录，清空缓存!', "color:red")
          }
        }
      }
    }
    if (route.children && route.children.length && !route.IsButton) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}
