/*
 * @Author: your name
 * @Date: 2020-12-02 11:13:39
 * @LastEditTime: 2020-12-06 02:32:40
 * @LastEditors: fangLong
 * @Description: In User Settings Edit
 * @FilePath: \vue3-admin-template\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setStore } from './store'

import '@/style/index.less'

import { setAntd } from '@/setup/ant-design-vue'
import { setRouter } from './router'

const app = createApp(App)
//初始化antd
setAntd(app)
setRouter(app)
setStore(app)
// app.use(router)
app.mount('#app')
