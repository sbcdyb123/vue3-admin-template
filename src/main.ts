/*
 * @Author: your name
 * @Date: 2020-12-02 11:13:39
 * @LastEditTime: 2020-12-03 10:47:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import '@/style/index.less'

import { setAntd } from '@/setup/ant-design-vue'
import { setRouter } from './router'

const app = createApp(App)
//初始化antd
setAntd(app)
setRouter(app)
app.use(store)
// app.use(router)
app.mount('#app')
