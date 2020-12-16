/*
 * @Date: 2020-12-04 08:34:05
 * @LastEditTime: 2020-12-16 10:30:21
 * @Description:
 */
import { BaseResponseModel } from '@/api/model/baseModel'
export interface LoginResponse {
  token: string
}

export type LoginResponseModel = BaseResponseModel<LoginResponse>

export interface LoginParams {
  username: string
  password: string
}

export type GetRoutesResponse = any[]
export type GetRoutesResponseModel = BaseResponseModel<GetRoutesResponse>
