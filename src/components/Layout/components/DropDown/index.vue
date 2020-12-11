<!--
 * @Date: 2020-12-11 13:58:05
 * @LastEditTime: 2020-12-11 15:18:01
 * @Description:
-->
<template>
  <a-dropdown :trigger="['contextmenu']">
    <span>{{ title }}</span>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item v-for="item in menuList" :key="item.eventName">
          <svg-icon :icon-class="item.icon" class-name="space"></svg-icon>
          <span>{{ item.text }}</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
  import { Dropdown } from 'ant-design-vue'

  import { defineComponent } from 'vue'

  import { useDorpDown } from '../../hooks/useDropDown'
  export default defineComponent({
    name: 'DropDown',
    props: {
      title: {
        type: String,
        required: true,
      },
      tag: {
        type: Object,
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
      return {
        handleMenuClick,
        menuList,
      }
    },
  })
</script>

<style scoped lang="less">
  .space {
    margin-right: 10px;
  }
</style>
