<!--
 * @Date: 2020-12-14 16:08:07
 * @LastEditTime: 2020-12-15 09:55:27
 * @Description:
-->
<template>
  <transition-group name="breadcrumb" tag="a-breadcrumb">
    <a-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span
        v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
        class="no-redirect"
        >{{ item.meta.title }}</span
      >
      <a v-else @click.prevent="go(item.path)">{{ item.meta.title }}</a>
    </a-breadcrumb-item>
  </transition-group>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Breadcrumb } from 'ant-design-vue'
  import { useBreadcurmb } from '../../hooks/useBreadcrumb'
  export default defineComponent({
    name: 'BreadCrumb',
    components: {
      ABreadcrumbItem: Breadcrumb.Item,
    },
    setup() {
      const { go, levelList } = useBreadcurmb()
      return {
        levelList,
        go,
      }
    },
  })
</script>

<style scoped lang="less">
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.3s ease-out;
  }

  .breadcrumb-enter-from,
  .breadcrumb-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
</style>
