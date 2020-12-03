/*
 * @Author: your name
 * @Date: 2020-12-03 11:20:28
 * @LastEditTime: 2020-12-03 15:01:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\src\hooks\web\useLogin.ts
 */
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/sys/user'
import { LoginParams } from '@/api/sys/model/userModel'
export function useLogin() {
  const router = useRouter()
  const formInline = reactive<LoginParams>({
    username: 'admin',
    password: '123456',
  })
  async function handleSubmit(e: unknown) {
    console.log(formInline, e, router)
    const { code } = await login(formInline)
    console.log(code)
    router.push({
      name: 'dashboard',
    })
  }
  return {
    formInline,
    handleSubmit,
  }
}
