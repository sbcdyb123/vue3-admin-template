/*
 * @Author: your name
 * @Date: 2020-12-03 11:20:28
 * @LastEditTime: 2020-12-06 04:51:30
 * @LastEditors: fangLong
 * @Description: In User Settings Edit
 * @FilePath: \vue3-admin-template\src\hooks\web\useLogin.ts
 */
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/sys/user'
import { LoginParams } from '@/api/sys/model/userModel'
import { userStore } from '@/store/modules/user'

export function useLogin() {
  const router = useRouter()
  const formInline = reactive<LoginParams>({
    username: 'admin',
    password: '123456',
  })
  async function handleSubmit(e: unknown) {
    console.log(formInline, e, router)
    const { response } = await login(formInline)
    userStore.commitTokenState(response.token)
    router.push({
      name: 'dashboard',
    })
  }
  return {
    formInline,
    handleSubmit,
  }
}
