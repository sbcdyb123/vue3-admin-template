/*
 * @Author: fangLong
 * @Date: 2020-12-04 22:03:24
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-06 04:32:27
 * @FilePath: \vue3-admin-template\src\router\scrollBehaviour.ts
 */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// see https://github.com/vuejs/vue-router-next/blob/master/playground/scrollWaiter.ts
class ScrollQueue {
  private resolve: ((value: any) => void) | null = null
  private promise: Promise<any> | null = null

  add() {
    this.promise = new Promise((resolve) => {
      this.resolve = resolve
    })
  }

  flush() {
    this.resolve && this.resolve('')
    this.resolve = null
    this.promise = null
  }

  async wait() {
    await this.promise
  }
}
// @ts-ignore
export const scrollWaiter = new ScrollQueue()
/**
 * Handles the scroll behavior on route navigation
 *
 * @param {object} to Route object of next page
 * @param {object} from Route object of previous page
 * @param {object} savedPosition Used by popstate navigations
 * @returns {(object|boolean)} Scroll position or `false`
 */
export async function scrollBehavior(
  to: { hash: string; matched: any[] },
  from: any,
  savedPosition: any
) {
  await scrollWaiter.wait()
  // Use predefined scroll behavior if defined, defaults to no scroll behavior
  const behavior = document.documentElement.style.scrollBehavior || 'auto'

  // Returning the `savedPosition` (if available) will result in a native-like
  // behavior when navigating with back/forward buttons
  if (savedPosition) {
    return { ...savedPosition, behavior }
  }

  // Scroll to anchor by returning the selector
  if (to.hash) {
    return { el: decodeURI(to.hash), behavior }
  }

  // Check if any matched route config has meta that discourages scrolling to top
  if (to.matched.some((m: any) => m.meta.scrollToTop === false)) {
    // Leave scroll as it is
    return false
  }

  // Always scroll to top
  return { left: 0, top: 0, behavior }
}
