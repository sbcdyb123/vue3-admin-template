/*
 * @Author: your name
 * @Date: 2020-12-03 09:23:51
 * @LastEditTime: 2020-12-03 15:18:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\setup\ant-design-vue\index.ts
 */
// eslint-disable-next-line prettier/prettier
import type {App} from 'vue'
import antv from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
export function setAntd(app:App<Element>){
  app.use(antv)
}
