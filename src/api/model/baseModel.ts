export interface BaseResponseModel<T> {
  code: number
  data?: T
  message?: string | null
}
