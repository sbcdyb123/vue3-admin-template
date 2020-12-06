<!--
 * @Author: your name
 * @Date: 2020-12-02 11:13:39
 * @LastEditTime: 2020-12-07 06:30:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\App.vue
-->
<template>
  <!-- <Layout> -->
  <!-- <router-view></router-view> -->
  <!-- </Layout> -->
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  // import Layout from '@/components/Layout/index.vue'
  export default defineComponent({
    name: 'app',
    components: {
      // Layout,
    },
  })
</script>

<style scoped lang="less"></style>
