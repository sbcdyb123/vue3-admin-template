/*
 * @Author: your name
 * @Date: 2020-12-03 11:22:48
 * @LastEditTime: 2020-12-07 00:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\utils\Validators.ts
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
