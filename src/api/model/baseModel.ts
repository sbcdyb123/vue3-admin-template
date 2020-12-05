export interface BaseResponseModel<T = any> {
  success: boolean
  response: T
  message: string
}
