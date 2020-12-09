/*
 * @Author: fangLong
 * @Date: 2020-12-09 19:30:41
 * @LastEditTime: 2020-12-09 19:35:01
 */
import { RouteRecordRaw } from 'vue-router'
export interface RouteMeta {
  title: string
  affix?: boolean
  icon?: string
}
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: RouteMeta
  component?: any
  children?: AppRouteRecordRaw[]
  fullPath?: string
}
