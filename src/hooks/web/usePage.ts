/*
 * @Date: 2020-12-10 16:11:49
 * @LastEditTime: 2020-12-10 16:24:36
 * @Description:
 */
import { isString } from 'lodash-es'
import { RouteLocationRaw } from 'vue-router'

import { PageEnum } from '@/enums/pageEnum'

import { router } from '../../router/index'
export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path: PageEnum }

function handleError(e: Error) {
  console.error(e)
}

export function useGo() {
  function go(
    options: PageEnum | RouteLocationRawEx | string = PageEnum.BASE_HOME,
    isReplace = false
  ) {
    if (!options) return
    const { push, replace } = router
    if (isString(options)) {
      isReplace ? replace(options).catch(handleError) : push(options).catch(handleError)
    } else {
      const opt = options as RouteLocationRaw
      isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError)
    }
  }
  return go
}
