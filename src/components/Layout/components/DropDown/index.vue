<!--
 * @Date: 2020-12-11 13:58:05
 * @LastEditTime: 2020-12-14 15:07:58
 * @Description:
-->
<template>
  <a-dropdown :trigger="['contextmenu']">
    <span>{{ title }}</span>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item
          v-for="item in menuList"
          :key="item.eventName"
          :disabled="isDisabled(item.text)"
        >
          <svg-icon :icon-class="item.icon" class-name="space"></svg-icon>
          <span>{{ item.text }}</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
  import { useTagsViewStore } from '@/store/modules/tagesView'
  import { Dropdown } from 'ant-design-vue'

  import { computed, defineComponent, PropType, unref } from 'vue'
  import { MenuText } from '../../hooks/type'

  import { useDorpDown } from '../../hooks/useDropDown'
  import { Tag } from '../../hooks/useTagsView'
  export default defineComponent({
    name: 'DropDown',
    props: {
      title: {
        type: String,
        required: true,
      },
      tag: {
        type: Object as PropType<Tag>,
        required: true,
      },
    },
    emits: ['menu-event'],
    components: {
      ADropdown: Dropdown,
    },
    setup(props, { emit }) {
      const { menuList } = useDorpDown()
      function handleMenuClick(e: any) {
        const menuEvent = menuList.find((m) => m.eventName === e.key)
        // console.log(e, menuEvent)
        if (menuEvent) {
          emit('menu-event', { eventName: menuEvent.eventName, tag: props.tag })
        }
      }
      function isDisabled(menuName: string) {
        const { tag } = props
        // console.log(menuName, index)
        const tags = computed(() => useTagsViewStore.getVisibleTagsState)
        const tagIndex = unref(tags).findIndex((t) => t.fullPath === tag.fullPath)
        if (menuName === MenuText.CLOSE_CURRENT) {
          return !!tag.meta.affix
        }
        if (menuName === MenuText.CLOSE_LEFT) {
          return tagIndex === 0 ? true : false
        }
        if (menuName === MenuText.CLOSE_RIGHT) {
          return tagIndex === unref(tags).length - 1 ? true : false
        }
      }
      return {
        handleMenuClick,
        menuList,
        isDisabled,
      }
    },
  })
</script>

<style scoped lang="less">
  .space {
    margin-right: 10px;
  }
</style>
