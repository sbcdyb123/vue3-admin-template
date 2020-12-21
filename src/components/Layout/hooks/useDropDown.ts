import { useGo } from '@/hooks/web/usePage'
import { useTagsViewStore } from '@/store/modules/tagesView'
import { computed, reactive } from 'vue'
import { MenuEvent, MenuIcon, MenuInfo, MenuText } from './type'
import { Tag } from './useTagsView'

/*
 * @Date: 2020-12-11 14:08:40
 * @LastEditTime: 2020-12-17 14:04:00
 * @Description:
 */

export function useDorpDown() {
  function toLastView(visitedTags: Tag[]) {
    const latestView = visitedTags.slice(-1)[0]
    const go = useGo()

    if (latestView) {
      go(latestView.fullPath)
    }
  }
  const menuList = reactive<MenuInfo[]>([
    {
      text: MenuText.REFRESH_CURRENT,
      icon: MenuIcon.REFRESH_CURRENT,
      eventName: MenuEvent.REFRESH_CURRENT,
    },
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
  async function handleMenuEvent({ eventName, tag }: { eventName: MenuEvent; tag: Tag }) {
    const visitedTags = computed(() => useTagsViewStore.getVisibleTagsState)
    switch (eventName) {
      case MenuEvent.CLOSE_CURRENT:
        await useTagsViewStore.actionDeltag(tag.fullPath)
        toLastView(visitedTags.value)
        break
      case MenuEvent.CLOSE_LEFT:
        await useTagsViewStore.actionDelLeftCTags(tag)
        toLastView(visitedTags.value)
        break
      case MenuEvent.CLOSE_RIGHT:
        await useTagsViewStore.actionDelRightCTags(tag)
        toLastView(visitedTags.value)
        break
      case MenuEvent.CLOSE_OTHER:
        await useTagsViewStore.actionsDelOtherTags(tag)
        toLastView(visitedTags.value)
        break
      case MenuEvent.CLOSE_ALL:
        await useTagsViewStore.actionDelAllTags()
        toLastView(visitedTags.value)
        break
      case MenuEvent.REFRESH_CURRENT:
        await useTagsViewStore.actionRefreshCurrent(tag)
    }
  }
  return {
    menuList,
    handleMenuEvent,
    toLastView,
  }
}
