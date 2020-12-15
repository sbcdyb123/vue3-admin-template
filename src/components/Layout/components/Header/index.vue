<!--
 * @Date: 2020-12-14 15:27:51
 * @LastEditTime: 2020-12-15 10:48:46
 * @Description:
-->
<template>
  <div class="header-container">
    <div class="flex-left">
      <div class="trigger" @click="trigger">
        <menu-unfold-outlined v-if="collapsed" />
        <menu-fold-outlined v-else />
      </div>
      <Breadcrumb />
    </div>
    <div class="flex-right">
      <User />
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, unref } from 'vue'
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
  import Breadcrumb from '../BreadCrumb/index.vue'
  import User from '../User/index.vue'
  import { useProject } from '@/store/modules/project'
  export default defineComponent({
    name: 'Header',
    components: {
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      Breadcrumb,
      User,
    },
    setup() {
      // const collapsed = ref(false)
      const collapsed = computed(() => useProject.getCollapsedState)
      function trigger() {
        useProject.commitCollapsedState(!unref(collapsed))
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
    justify-content: space-between;
    border-bottom: 1px solid @header-light-bottom-border-color;

    .flex-left {
      display: flex;
      align-items: center;
      height: 100%;

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

    .flex-right {
      display: flex;
      align-items: center;
      height: 100%;
      margin-right: 20px;
    }
  }
</style>
