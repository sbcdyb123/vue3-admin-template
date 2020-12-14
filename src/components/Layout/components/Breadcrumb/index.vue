<!--
 * @Date: 2020-12-14 16:08:07
 * @LastEditTime: 2020-12-14 16:22:08
 * @Description:
-->
<template>
  <a-breadcrumb>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Breadcrumb } from 'ant-design-vue'
  export default defineComponent({
    name: 'Breadcrumb',
    components: {
      ABreadcrumb: Breadcrumb,
      ABreadcrumbItem: Breadcrumb.Item,
    },
    // setup(){

    // }
  })
</script>

<style scoped lang="less"></style>
