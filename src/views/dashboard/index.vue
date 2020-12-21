<!--
 * @Author: your name
 * @Date: 2020-12-03 14:44:54
 * @LastEditTime: 2020-12-21 09:03:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\views\dashboard\index.vue
-->
<template>
  <div>
    <a-skeleton active :loading="loading">
      <div>
        <h4>Ant Design Vue, a design language</h4>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      </div>
    </a-skeleton>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Skeleton } from 'ant-design-vue'
  export default defineComponent({
    components: {
      ASkeleton: Skeleton,
    },
    name: 'dashboard',
    setup() {
      const loading = ref(true)
      setTimeout(() => (loading.value = false), 2000)

      return {
        loading,
      }
    },
  })
</script>

<style scoped lang="less"></style>
