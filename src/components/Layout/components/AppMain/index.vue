<!--
 * @Author: fangLong
 * @Date: 2020-12-07 04:26:53
 * @LastEditTime: 2020-12-07 04:32:30
-->
<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.fullPath" />
  </router-view>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'PageLayout',
  })
</script>
<style lang="less" scoped></style>
