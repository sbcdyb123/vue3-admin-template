/*
 * @Author: fangLong
 * @Date: 2020-12-03 18:37:34
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-06 04:32:56
 * @FilePath: \vue3-admin-template\src\store\index.ts
 */
import { App } from 'vue'
import {
  createStore,
  // createLogger, Plugin
} from 'vuex'
import { config } from 'vuex-module-decorators'

config.rawError = true
const isDev = true
// const plugins: Plugin<any>[] = isDev ? [createLogger()] : [];

const store = createStore({
  strict: isDev,
  // plugins,
})

export function setStore(app: App<Element>) {
  app.use(store)
}

export default store
