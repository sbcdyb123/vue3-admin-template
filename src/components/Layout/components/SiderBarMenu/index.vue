<!--
 * @Author: fangLong
 * @Date: 2020-12-08 21:54:26
 * @LastEditTime: 2020-12-09 00:29:20
-->
<template>
  <component :is="menuComponent" v-if="!item.hidden" :item="item" :route-children="routeChildren">
    <template v-if="item.children && item.children.length">
      <sider-bar-menu
        v-for="route in item.children"
        :key="route.path"
        :item="route"
      ></sider-bar-menu>
    </template>
  </component>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  import MenuItem from './components/MenuItem.vue'
  import Submenu from './components/Submenu.vue'
  export default defineComponent({
    name: 'SiderBarMenu',
    components: { MenuItem, Submenu },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      interface RouteState {
        routeChildren: any
        menuComponent: string
      }
      function handleChildren(children = []) {
        if (children === null) return []
        return children.filter((item: any) => item.hidden !== true)
      }
      const routeState = reactive<RouteState>({
        routeChildren: {},
        menuComponent: '',
      })
      const showChildren = handleChildren(props.item.children)
      if (showChildren.length === 0) {
        routeState.menuComponent = 'MenuItem'
        routeState.routeChildren = reactive(props.item)
      } else if (showChildren.length === 1 && props.item.alwaysShow !== true) {
        routeState.menuComponent = 'MenuItem'
        routeState.routeChildren = reactive(showChildren[0])
      } else {
        routeState.menuComponent = 'Submenu'
      }
      return {
        ...toRefs(routeState),
      }
    },
  })
</script>
<style lang="less">
  .anticon {
    margin-right: 3px !important;
  }
</style>
