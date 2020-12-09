<!--
 * @Author: your name
 * @Date: 2020-12-03 15:06:03
 * @LastEditTime: 2020-12-09 21:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\components\Layout\index.vue
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider>
      <a-menu
        class="vab-menu"
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        :inline-collapsed="collapsed"
      >
        <sider-bar-menu v-for="route in routes" :key="route.path" :item="route" />
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style=" padding: 0;background: #fff;">
        <div>
          <menu-unfold-outlined v-if="collapsed" @click="trigger(!collapsed)" />
          <menu-fold-outlined v-else @click="trigger(!collapsed)" />
        </div>
        <tags-view />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import { ref } from 'vue'
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

  import SiderBarMenu from './components/SiderBarMenu/index'
  import TagsView from './components/TagsView/index.vue'

  import { userPermission } from '@/store/modules/permission'
  export default {
    name: 'DefaultLayout',
    components: {
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      SiderBarMenu,
      TagsView,
    },
    data() {
      return {
        selectedKeys: [],
        openKeys: [],
        // collapsed: false,
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
      // const collapsed = useProject.getCollapsedState
      const collapsed = ref(false)
      function trigger(flag) {
        console.log(flag)
        collapsed.value = flag
      }
      return {
        routes,
        trigger,
        collapsed,
      }
    },
  }
</script>
<style lang="less" scoped>
  #components-layout-demo-custom-trigger {
    height: 100vh;
  }

  .ant-layout-header {
    line-height: 1;
  }
</style>
