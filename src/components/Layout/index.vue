<!--
 * @Author: your name
 * @Date: 2020-12-03 15:06:03
 * @LastEditTime: 2020-12-09 14:59:38
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
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="trigger(!collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="trigger(!collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.fullPath" />
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
  import SiderBarMenu from './components/SiderBarMenu/index'
  // import { useProject } from '@/store/modules/project'
  import { userPermission } from '@/store/modules/permission'
  import { ref } from 'vue'
  export default {
    name: 'DefaultLayout',
    components: {
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      SiderBarMenu,
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
<style>
  #components-layout-demo-custom-trigger {
    height: 100vh;
  }

  #components-layout-demo-custom-trigger .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }
</style>
