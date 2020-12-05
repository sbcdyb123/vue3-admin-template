/*
 * @Author: fangLong
 * @Date: 2020-12-03 00:06:25
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-05 00:27:43
 * @FilePath: \vue3-admin-template\src\shims-vue.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
