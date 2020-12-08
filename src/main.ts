/*
 * @Author: your name
 * @Date: 2020-12-02 11:13:39
 * @LastEditTime: 2020-12-09 00:31:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-admin-template\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setStore } from './store'

import '@/style/index.less'

import { setAntd } from '@/setup/ant-design-vue'
import { setRouter } from './router'
import { setSvgIcon } from './icons'

const app = createApp(App)
//初始化antd
setSvgIcon(app)
setAntd(app)
setRouter(app)
setStore(app)
// app.use(router)
app.mount('#app')
