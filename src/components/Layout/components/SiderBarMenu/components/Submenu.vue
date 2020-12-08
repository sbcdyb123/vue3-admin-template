<!--
 * @Author: fangLong
 * @Date: 2020-12-08 21:54:26
 * @LastEditTime: 2020-12-08 23:46:20
-->
<template>
  <a-sub-menu :key="item.fullPath">
    <template v-slot:title>
      <span class="anticon">
        <svg-icon :icon-class="item.meta.icon"></svg-icon>
      </span>
      <span>{{ item.meta.title }}</span>
    </template>
    <slot></slot>
  </a-sub-menu>
</template>

<script>
  // import VabIcon from '@/layout/vab-icon'
  export default {
    name: 'Submenu',
    // components: { VabIcon },
    props: {
      item: {
        type: Object,
        default() {
          return null
        },
      },
      routeChildren: {
        type: Object,
        default() {
          return null
        },
      },
    },
  }
</script>
