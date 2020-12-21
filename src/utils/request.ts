/*
 * @Date: 2020-12-04 08:34:05
 * @LastEditTime: 2020-12-21 15:01:50
 * @Description:
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { BaseResponseModel } from '@/api/model/baseModel'
import { useMessage } from '@/hooks/web/useMessage'
import { checkStatus } from './checkStatus'
const { createMessage } = useMessage()
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
    const { response, code, message } = error || {}
    const msg: string = response?.data?.msg ? response.data.msg : ''
    const err: string = error?.toString()
    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        createMessage.error('接口请求超时,请刷新页面重试')
      }
      if (err?.includes('Network Error')) {
        createMessage.error('网请检查您的网络连接是否正常!')
      }
    } catch (error) {
      throw new Error(error)
    }
    response && checkStatus(response?.status, msg)
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
