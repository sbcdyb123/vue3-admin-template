/*
 * @Date: 2020-12-17 09:07:02
 * @LastEditTime: 2020-12-17 09:24:48
 * @Description:
 */
import { notification, message } from 'ant-design-vue'
import { ArgsProps, ConfigProps } from 'ant-design-vue/lib/notification'

export interface NotifyApi {
  info(config: ArgsProps): void
  success(config: ArgsProps): void
  error(config: ArgsProps): void
  warn(config: ArgsProps): void
  warning(config: ArgsProps): void
  open(args: ArgsProps): void
  close(key: string): void
  config(options: ConfigProps): void
  destroy(): void
}
export function useMessage() {
  return {
    createMessage: message,
    createNotification: notification as NotifyApi,
  }
}
