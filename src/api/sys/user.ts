import { GetRoutesResponseModel } from './model/userModel'
/*
 * @Author: your name
 * @Date: 2020-12-04 08:34:05
 * @LastEditTime: 2020-12-16 10:31:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\api\sys\user.ts
 */
import request from '@/utils/request'
import { LoginParams, LoginResponseModel } from './model/userModel'
enum Api {
  Login = '/vue-element-admin/user/login',
  Logout = '/vue-element-admin/user/logout',
  UserInfo = '/vue-element-admin/user/info',
  getRoutes = '/vue-element-admin/routes',
}
/**
 * @description: 登录接口
 * @param {LoginParams} data
 * @return {*}
 */
export function login(data: LoginParams) {
  return request<LoginResponseModel>({
    url: Api.Login,
    method: 'post',
    data,
  })
}

/**
 * @description: 获取用户信息
 * @param {string} token
 * @return {*}
 */
export function getInfo(token: string) {
  return request({
    url: Api.UserInfo,
    method: 'get',
    params: { token },
  })
}

/**
 * @description: 登出
 * @param {*}
 * @return {*}
 */
export function logout() {
  return request({
    url: Api.Logout,
    method: 'post',
  })
}

export function getRoutes() {
  return request<GetRoutesResponseModel>({
    url: Api.getRoutes,
    method: 'get',
  })
}
