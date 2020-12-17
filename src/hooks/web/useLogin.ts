/*
 * @Author: your name
 * @Date: 2020-12-03 11:20:28
 * @LastEditTime: 2020-12-17 09:28:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-admin-template\src\hooks\web\useLogin.ts
 */
import { computed, reactive, unref, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { login } from '@/api/sys/user'
import { LoginParams } from '@/api/sys/model/userModel'
import { userStore } from '@/store/modules/user'
import { omit } from 'lodash-es'
import { useForm } from '@ant-design-vue/use'
import { useMessage } from './useMessage'
export function useLogin() {
  const tabKey = ref('username') //tabs
  const router = useRouter()
  const route = useRoute()
  const redirect = computed(() => route.query.redirect)
  const otherQuery = computed(() => omit(route.query, 'redirect'))
  const loading = ref(false)
  const { createNotification } = useMessage()
  //账号密码登录验证
  const formRef = reactive<LoginParams>({
    username: 'admin',
    password: '123456',
  })
  const usernameRulesRef = reactive({
    username: [
      {
        required: true,
        message: '账号不得为空',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '密码不得为空',
        trigger: 'blur',
      },
    ],
  })
  const {
    resetFields: resetUpFields,
    validate: validateUp,
    validateInfos: validateUpInfos,
  } = useForm(formRef, usernameRulesRef)
  const handleUpSubmit = (e: any) => {
    loading.value = true
    e.preventDefault()
    validateUp()
      .then(async () => {
        const { response } = await login(formRef)
        userStore.commitTokenState(response.token)
        router.push({ path: unref(redirect) as string, query: unref(otherQuery) })
        loading.value = false
        createNotification.success({
          message: '登录成功',
          description: `欢迎回来：username`,
          duration: 3,
        })
      })
      .catch((err) => {
        loading.value = false
        console.log('error', err)
      })
  }
  //手机号登录验证
  const formPhoneRef = reactive({
    phone: 'admin',
    code: '123456',
  })
  const phoneRulesRef = reactive({
    phone: [
      {
        required: true,
        message: '账号不得为空',
        trigger: 'blur',
      },
    ],
    code: [
      {
        required: true,
        message: '密码不得为空',
        trigger: 'blur',
      },
    ],
  })
  const {
    resetFields: resetPhoneFields,
    validate: validatePhone,
    validateInfos: validatePhoneInfos,
  } = useForm(formPhoneRef, phoneRulesRef)
  const handlePhoneSubmit = (e: any) => {
    loading.value = true
    e.preventDefault()
    validatePhone()
      .then(async () => {
        const { response } = await login(formRef)
        userStore.commitTokenState(response.token)
        router.push({ path: unref(redirect) as string, query: unref(otherQuery) })
        loading.value = false
      })
      .catch((err) => {
        console.log('error', err)
        loading.value = false
      })
  }
  return {
    tabKey,
    formRef,
    handleUpSubmit,
    resetUpFields,
    validateUpInfos,
    formPhoneRef,
    handlePhoneSubmit,
    resetPhoneFields,
    validatePhoneInfos,
    loading,
  }
}
