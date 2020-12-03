import { BaseResponseModel } from '@/api/model/baseModel'
export interface LoginResponse {
  token: string
}
export type LoginResponseModel = Promise<BaseResponseModel<LoginResponse>>

export interface LoginParams {
  username: string
  password: string
}
