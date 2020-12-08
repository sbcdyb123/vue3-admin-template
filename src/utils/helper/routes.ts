import { isExternal } from '../validators'

/*
 * @Author: fangLong
 * @Date: 2020-12-08 23:33:10
 * @LastEditTime: 2020-12-08 23:34:26
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
