/*
 * @Author: fangLong
 * @Date: 2020-12-06 03:47:14
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-06 03:47:22
 * @FilePath: \vue3-admin-template\src\utils\helper\vuexHelper.ts
 */
import store from '@/store'

export function hotModuleUnregisterModule(name: string) {
  if (!name) return
  if ((store.state as any)[name]) {
    store.unregisterModule(name)
  }
}
