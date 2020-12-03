import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { BaseResponseModel } from '@/api/model/baseModel'
// create an axios instance
const service: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})
// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something before request is sent

    return config
  },
  (error: AxiosError) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response: AxiosResponse) => {
    const res = response.data

    return res
  },
  (error: AxiosError) => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    service
      .request<any, AxiosResponse<BaseResponseModel>>(config)
      .then((res: AxiosResponse<BaseResponseModel>) => {
        resolve((res as unknown) as Promise<T>)
      })
      .catch((error: AxiosError) => {
        reject(error)
      })
  })
}
export default request
