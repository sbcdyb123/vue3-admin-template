<!--
 * @Author: fangLong
 * @Date: 2020-12-07 00:39:00
 * @LastEditTime: 2020-12-07 03:38:38
-->

<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <svg-icon icon-class="edit"></svg-icon>
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <svg-icon icon-class="edit"></svg-icon>
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <svg-icon icon-class="edit"></svg-icon>
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const selectedKeys = ref()
      const collapsed = ref()
      return {
        selectedKeys,
        collapsed,
      }
    },
  })
</script>
<style lang="less" scoped></style>
