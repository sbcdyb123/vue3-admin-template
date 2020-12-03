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
export function useLogin() {
  const router = useRouter()
  const formInline = reactive({
    username: '',
    password: '',
  })
  function handleSubmit(e: unknown) {
    console.log(formInline, e, router)
    router.push({
      name: 'dashboard',
    })
  }
  return {
    formInline,
    handleSubmit,
  }
}
