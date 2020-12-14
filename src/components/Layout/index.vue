<!--
 * @Author: your name
 * @Date: 2020-12-03 15:06:03
 * @LastEditTime: 2020-12-14 16:00:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\components\Layout\index.vue
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <a-menu
        class="vab-menu"
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
      >
        <sider-bar-menu v-for="route in routes" :key="route.path" :item="route" />
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style=" padding: 0;background: #fff;">
        <Header />
        <tags-view />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view v-slot="{ Component, route }">
          <keep-alive :include="cachedTages">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import { computed } from 'vue'

  import SiderBarMenu from './components/SiderBarMenu/index'
  import TagsView from './components/TagsView/index.vue'
  import Header from './components/Header/index.vue'

  import { userPermission } from '@/store/modules/permission'
  import { useTagsViewStore } from '@/store/modules/tagesView'
  export default {
    name: 'DefaultLayout',
    components: {
      SiderBarMenu,
      TagsView,
      Header,
    },
    data() {
      return {
        selectedKeys: [],
        openKeys: [],
        collapsed: false,
      }
    },
    watch: {
      $route: {
        handler({ path, matched }) {
          matched[0].children.length > 1
            ? (this.selectedKeys = [path])
            : (this.selectedKeys = [matched[0].path])
          this.openKeys = [matched[0].path]
        },
        immediate: true,
      },
    },
    setup() {
      const routes = userPermission.getRoutesState
      const cachedTages = computed(() => useTagsViewStore.getCachedTagesState)

      return {
        routes,
        cachedTages,
      }
    },
  }
</script>
<style lang="less" scoped>
  #components-layout-demo-custom-trigger {
    height: 100vh;
  }

  .ant-layout-header {
    height: 80px;
    line-height: 1;
  }
</style>
