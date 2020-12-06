<!--
 * @Author: fangLong
 * @Date: 2020-12-07 06:22:36
 * @LastEditTime: 2020-12-07 06:35:03
-->
<template>
  <div>
    <div>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/addRoute">addRoute</router-link>
    </div>
    <div>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>
<style lang="less" scoped></style>
