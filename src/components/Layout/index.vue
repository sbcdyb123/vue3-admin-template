<!--
 * @Author: your name
 * @Date: 2020-12-03 15:06:03
 * @LastEditTime: 2020-12-16 12:47:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\components\Layout\index.vue
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
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
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cachedTages">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
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
  import { useProject } from '@/store/modules/project'
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
      const collapsed = computed(() => useProject.getCollapsedState)
      return {
        routes,
        cachedTages,
        collapsed,
      }
    },
  }
</script>
<style lang="less" scoped>
  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  #components-layout-demo-custom-trigger {
    height: 100vh;
  }

  .ant-layout-header {
    height: 80px;
    line-height: 1;
  }
</style>
