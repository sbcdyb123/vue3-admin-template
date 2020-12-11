import { useTagsViewStore } from '@/store/modules/tagesView'
import { reactive } from 'vue'
import { MenuEvent, MenuIcon, MenuInfo, MenuText } from './type'
import { Tag } from './useTagsView'

/*
 * @Date: 2020-12-11 14:08:40
 * @LastEditTime: 2020-12-11 15:35:07
 * @Description:
 */

export function useDorpDown() {
  const menuList = reactive<MenuInfo[]>([
    {
      text: MenuText.CLOSE_CURRENT,
      icon: MenuIcon.CLOSE_CURRENT,
      eventName: MenuEvent.CLOSE_CURRENT,
    },
    {
      text: MenuText.CLOSE_LEFT,
      icon: MenuIcon.CLOSE_LEFT,
      eventName: MenuEvent.CLOSE_LEFT,
    },
    {
      text: MenuText.CLOSE_RIGHT,
      icon: MenuIcon.CLOSE_RIGHT,
      eventName: MenuEvent.CLOSE_RIGHT,
    },
    {
      text: MenuText.CLOSE_OTHER,
      icon: MenuIcon.CLOSE_OTHER,
      eventName: MenuEvent.CLOSE_OTHER,
    },
    {
      text: MenuText.CLOSE_ALL,
      icon: MenuIcon.CLOSE_ALL,
      eventName: MenuEvent.CLOSE_ALL,
    },
  ])
  function handleMenuEvent({ eventName, tag }: { eventName: MenuEvent; tag: Tag }) {
    switch (eventName) {
      case MenuEvent.CLOSE_CURRENT:
        useTagsViewStore.actionDeltag(tag.fullPath)
        console.log('点击了CLOSE_CURRENT', tag)
        break
      case MenuEvent.CLOSE_LEFT:
        console.log('点击了CLOSE_LEFT')
        break
      case MenuEvent.CLOSE_RIGHT:
        console.log('点击了CLOSE_RIGHT')
        break
      case MenuEvent.CLOSE_OTHER:
        console.log('点击了CLOSE_OTHER')
        break
      case MenuEvent.CLOSE_ALL:
        console.log('点击了CLOSE_ALL')
        break
    }
  }
  return {
    menuList,
    handleMenuEvent,
  }
}
