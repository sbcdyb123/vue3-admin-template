<!--
 * @Author: your name
 * @Date: 2020-12-03 09:59:37
 * @LastEditTime: 2020-12-03 13:55:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\views\sys\login.vue
-->
<template>
  <a-row type="flex" justify="center" class="login_form">
    <a-col :span="4" class="">
      <a-form :model="formInline" @submit="handleSubmit" @submit.prevent>
        <a-form-item>
          <a-input v-model:value="formInline.username" placeholder="Username">
            <template #prefix><UserOutlined style="color: rgba(0,0,0,.25);"/></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formInline.password" type="password" placeholder="Password">
            <template #prefix><LockOutlined style="color: rgba(0,0,0,.25);"/></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.username === '' || formInline.password === ''"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
  import { useLogin } from '@/hooks/web/useLogin'
  export default defineComponent({
    name: 'login',
    components: {
      UserOutlined,
      LockOutlined,
    },
    setup() {
      const { formInline, handleSubmit } = useLogin() // userLoginForm
      return {
        formInline,
        handleSubmit,
      }
    },
  })
</script>

<style lang="less" scoped>
  .login_form {
    height: 100vh;
    align-items: center;
  }
</style>
