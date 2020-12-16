<!--
 * @Date: 2020-12-15 10:02:51
 * @LastEditTime: 2020-12-16 11:27:21
 * @Description:
-->
<template>
  <a-dropdown>
    <div class="user-container">
      <a-avatar>USER</a-avatar>
      <span class="name">方龙</span>
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <UserDeleteOutlined />
          <span class="text">个人中心</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3" @click="loginOut">
          <LoginOutlined />
          <span class="text">退出系统</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Avatar, Dropdown } from 'ant-design-vue'
  import { UserDeleteOutlined, LoginOutlined } from '@ant-design/icons-vue'
  import { userStore } from '@/store/modules/user'
  import { useGo } from '@/hooks/web/usePage'
  import { useRoute } from 'vue-router'
  export default defineComponent({
    name: 'User',
    components: {
      AAvatar: Avatar,
      ADropdown: Dropdown,
      UserDeleteOutlined,
      LoginOutlined,
    },
    setup() {
      const route = useRoute()
      async function loginOut() {
        await userStore.Loginout()
        const go = useGo()
        go(`/login?redirect=${route.fullPath}`)
      }
      return {
        loginOut,
      }
    },
  })
</script>

<style scoped lang="less">
  @import '@/style/index.less';

  .user-container {
    display: flex;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    transition: all 0.2s;
    align-items: center;

    &:hover {
      background-color: @header-light-bg-hover-color;
    }

    .name {
      margin: 0 10px;
    }
  }

  .ant-dropdown-menu-item {
    padding: 0 10px;
    line-height: 40px;

    .text {
      margin: 0 10px;
    }

    & > .anticon:first-child {
      font-size: 16px;
    }
  }
</style>
