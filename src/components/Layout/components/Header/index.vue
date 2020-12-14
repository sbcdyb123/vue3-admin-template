<!--
 * @Date: 2020-12-14 15:27:51
 * @LastEditTime: 2020-12-14 16:26:04
 * @Description:
-->
<template>
  <div class="header-container">
    <div class="trigger" @click="trigger">
      <menu-unfold-outlined v-if="collapsed" />
      <menu-fold-outlined v-else />
    </div>
    <Breadcrumb />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, unref } from 'vue'
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
  import Breadcrumb from '../Breadcrumb/index.vue'
  export default defineComponent({
    name: 'Header',
    components: {
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      Breadcrumb,
    },
    setup() {
      const collapsed = ref(false)
      function trigger() {
        collapsed.value = !unref(collapsed)
      }
      return {
        collapsed,
        trigger,
      }
    },
  })
</script>

<style scoped lang="less">
  @import '@/style/index.less';

  .header-container {
    display: flex;
    height: @header-height;
    align-items: center;

    .trigger {
      display: flex;
      width: @header-height;
      height: 100%;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.2s;
      justify-content: center;
      align-items: center;

      &:hover {
        color: @primary-color;
        background-color: @header-light-bg-hover-color;
      }
    }
  }
</style>
