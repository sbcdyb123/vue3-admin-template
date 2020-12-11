/*
 * @Date: 2020-12-11 14:47:16
 * @LastEditTime: 2020-12-11 15:10:23
 * @Description:
 */
export interface MenuInfo {
  text: MenuText
  icon: MenuIcon
  eventName: MenuEvent
}
export enum MenuText {
  CLOSE_ALL = '关闭全部',
  CLOSE_LEFT = '关闭左侧',
  CLOSE_RIGHT = '关闭右侧',
  CLOSE_OTHER = '关闭其他',
  CLOSE_CURRENT = '关闭',
}
export enum MenuIcon {
  CLOSE_ALL = 'edit',
  CLOSE_LEFT = 'email',
  CLOSE_RIGHT = 'icon',
  CLOSE_OTHER = 'pdf',
  CLOSE_CURRENT = 'search',
}
export enum MenuEvent {
  CLOSE_ALL = 'CLOSE_ALL',
  CLOSE_LEFT = 'CLOSE_LEFT',
  CLOSE_RIGHT = 'CLOSE_RIGHT',
  CLOSE_OTHER = 'CLOSE_OTHER',
  CLOSE_CURRENT = 'CLOSE_CURRENT',
}
