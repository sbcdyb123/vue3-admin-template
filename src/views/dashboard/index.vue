<!--
 * @Author: your name
 * @Date: 2020-12-03 14:44:54
 * @LastEditTime: 2020-12-07 03:40:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\views\dashboard\index.vue
-->
<template>
  <div>
    <svg-icon icon-class="edit"></svg-icon>
    <button @click="go">跳转</button>
    <button @click="showCurrentRouter">跳转</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: 'dashboard',
    setup() {
      const router = useRouter()
      return {
        go: () => router.push('/sys/about'),
        showCurrentRouter: () => console.log(router.getRoutes()),
      }
    },
  })
</script>

<style scoped lang="less"></style>
