<!--
 * @Author: your name
 * @Date: 2020-12-03 14:44:54
 * @LastEditTime: 2020-12-17 16:27:02
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
      <Icon icon="mdi:cellphone-dock" :size="30" />
      <Icon icon="mdi:cellphone-dock" :size="30" />
      <Icon icon="mdi:cellphone-dock" :size="30" />
    </a-skeleton>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Skeleton } from 'ant-design-vue'
  import Icon from '@/components/Icon/index'
  export default defineComponent({
    components: {
      ASkeleton: Skeleton,
      Icon,
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
