export interface BaseResponseModel<T = any> {
  code: number
  data?: T
  message?: string | null
}
