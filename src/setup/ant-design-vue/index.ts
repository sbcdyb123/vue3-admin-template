/*
 * @Author: your name
 * @Date: 2020-12-03 09:23:51
 * @LastEditTime: 2020-12-16 14:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\setup\ant-design-vue\index.ts
 */
// eslint-disable-next-line prettier/prettier
import type {App} from 'vue'
import {Button,Menu,Layout, Col, Row, Input, Form, Tabs, Checkbox} from 'ant-design-vue'
export function setAntd(app:App<Element>){
  app.use(Button).use(Menu).use(Layout).use(Col).use(Row).use(Input).use(Form).use(Tabs).use(Checkbox)
}
