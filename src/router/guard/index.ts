/*
 * @Author: fangLong
 * @Date: 2020-12-04 22:15:03
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-04 22:58:25
 * @FilePath: \vue3-admin-template\src\router\guard\index.ts
 */
import { Router } from 'vue-router'
import { createProgressGuard } from './progressGuard'
import { createPermissionGuard } from './permissionGuard'
export function createGuard(router: Router) {
  createProgressGuard(router) // 全局进度条
  createPermissionGuard(router) //路由鉴权守卫
}
