import request from '@/utils/request'
import { LoginParams, LoginResponseModel } from './model/userModel'
enum Api {
  Login = '/vue-element-admin/user/login',
  Logout = '/vue-element-admin/user/logout',
  UserInfo = '/vue-element-admin/user/info',
}
export function login(data: LoginParams) {
  return request<LoginResponseModel>({
    url: Api.Login,
    method: 'post',
    data,
  })
}

export function getInfo(token: string) {
  return request({
    url: Api.UserInfo,
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: Api.Logout,
    method: 'post',
  })
}
