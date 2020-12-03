import { BaseResponseModel } from '@/api/model/baseModel'
import { AxiosPromise } from 'axios'
export interface LoginResponse {
  token: string
}
export type LoginResponseModel = AxiosPromise<BaseResponseModel<LoginResponse>>

export interface LoginParams {
  username: string
  password: string
}
