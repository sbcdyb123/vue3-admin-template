<!--
 * @Author: your name
 * @Date: 2020-12-02 11:13:39
 * @LastEditTime: 2020-12-03 15:23:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\App.vue
-->
<template>
  <!-- <Layout> -->
  <router-view></router-view>
  <!-- </Layout> -->
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
