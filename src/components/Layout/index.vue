<!--
 * @Author: your name
 * @Date: 2020-12-03 15:06:03
 * @LastEditTime: 2020-12-07 06:44:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\components\Layout\index.vue
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <SiderBar />
    <a-layout>
      <a-layout-header style=" padding: 0;background: #fff;">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
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
  import SiderBar from './components/SiderBar/index'
  export default {
    name: 'DefaultLayout',
    components: {
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      SiderBar,
    },
    data() {
      return {
        selectedKeys: ['1'],
        collapsed: false,
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
