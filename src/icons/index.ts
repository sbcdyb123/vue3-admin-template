/*
 * @Author: fangLong
 * @Date: 2020-12-07 00:09:19
 * @LastEditTime: 2020-12-07 00:36:08
 */
import SvgIcon from '@/components/SvgIcon/index.vue' // svg component
import { App } from 'vue'
const req = require.context('./svg', false, /\.svg$/)

const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map(requireContext)
}

requireAll(req)

// register globally
export function setSvgIcon(app: App) {
  app.component('svg-icon', SvgIcon)
}
