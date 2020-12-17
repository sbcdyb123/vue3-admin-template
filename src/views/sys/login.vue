<!--
 * @Author: your name
 * @Date: 2020-12-03 09:59:37
 * @LastEditTime: 2020-12-17 09:05:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-admin-template\src\views\sys\login.vue
-->
<template>
  <a-row type="flex" justify="center" class="login_form">
    <a-col :span="4" class="">
      <a-form>
        <a-tabs v-model:activeKey="tabKey">
          <a-tab-pane key="username" tab="账号密码登录">
            <a-form-item v-bind="validateUpInfos.username">
              <a-input v-model:value="formRef.username" placeholder="Username">
                <template #prefix>
                  <UserOutlined style="color: rgba(0,0,0,.25);" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item v-bind="validateUpInfos.password">
              <a-input-password v-model:value="formRef.password" placeholder="input password">
                <template #prefix>
                  <LockOutlined style="color: rgba(0,0,0,.25);" />
                </template>
              </a-input-password>
            </a-form-item>
          </a-tab-pane>
          <a-tab-pane key="phone" tab="手机号登录">
            <a-form-item v-bind="validatePhoneInfos.phone">
              <a-input v-model:value="formPhoneRef.phone" placeholder="Username">
                <template #prefix>
                  <TabletOutlined style="color: rgba(0,0,0,.25);" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input-search v-model:value="formPhoneRef.code" placeholder="input search text">
                <template #prefix>
                  <MailOutlined style="color: rgba(0,0,0,.25);" />
                </template>
                <template #enterButton>
                  <a-button>
                    获取验证码
                  </a-button>
                </template>
              </a-input-search>
            </a-form-item>
          </a-tab-pane>
        </a-tabs>
        <a-row type="flex" justify="space-between">
          <a-col>
            <a-form-item>
              <a-checkbox-group>
                <a-checkbox value="1" name="type">
                  自动登录
                </a-checkbox>
              </a-checkbox-group>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item>
              <a href="" @click.prevent>忘记密码</a>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="submit" :loading="loading">
            登录
          </a-button>
        </a-form-item>
        <a-row></a-row>
      </a-form>
    </a-col>
  </a-row>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { UserOutlined, LockOutlined, TabletOutlined, MailOutlined } from '@ant-design/icons-vue'
  import { useLogin } from '@/hooks/web/useLogin'
  export default defineComponent({
    name: 'login',
    components: {
      UserOutlined,
      LockOutlined,
      TabletOutlined,
      MailOutlined,
    },
    setup() {
      const {
        formRef,
        handleUpSubmit,
        tabKey,
        validateUpInfos,
        formPhoneRef,
        handlePhoneSubmit,
        validatePhoneInfos,
        loading,
      } = useLogin() // userLoginForm
      const submit = (e: any) =>
        tabKey.value === 'username' ? handleUpSubmit(e) : handlePhoneSubmit(e)
      return {
        tabKey,
        formRef,
        validateUpInfos,
        formPhoneRef,
        validatePhoneInfos,
        submit,
        loading,
      }
    },
  })
</script>

<style lang="less" scoped>
  .login_form {
    height: 100vh;
    align-items: center;

    /deep/.ant-form-item-control-wrapper,
    .ant-btn {
      width: 100%;
    }

    /deep/ .ant-tabs-nav-scroll {
      display: flex;
      justify-content: center;
    }
  }
</style>
