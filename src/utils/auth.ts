/*
 * @Author: fangLong
 * @Date: 2020-12-06 00:38:35
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-06 00:43:09
 * @FilePath: \vue3-admin-template\src\utils\auth.ts
 */
import Cookies from 'js-cookie'
const TokenKey = 'admin-token'

export function setToken2Cookies(token: string) {
  return Cookies.set(TokenKey, token)
}
export function getToken4Cookies() {
  return Cookies.get(TokenKey)
}
export function removeToken4Cookies() {
  return Cookies.remove(TokenKey)
}
