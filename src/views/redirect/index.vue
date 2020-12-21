<!--
 * @Date: 2020-12-15 10:57:42
 * @LastEditTime: 2020-12-17 13:36:52
 * @Description:
-->

<template>
  <div />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  export default defineComponent({
    name: 'redirect',
    setup() {
      const { replace } = useRouter()
      const { params, query } = useRoute()
      const { path } = params
      replace({ path: `/${path}`, query })
    },
  })
</script>
