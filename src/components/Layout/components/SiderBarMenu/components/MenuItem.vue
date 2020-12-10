<!--
 * @Author: fangLong
 * @Date: 2020-12-08 21:54:26
 * @LastEditTime: 2020-12-10 14:33:43
-->
<template>
  <a-menu-item :key="routeChildren.path" @click.capture="handleLink">
    <span class="anticon">
      <svg-icon :icon-class="routeChildren.meta.icon"></svg-icon>
    </span>
    <span>{{ routeChildren.meta.title }}</span>
  </a-menu-item>
</template>

<script>
  import { isExternal } from '@/utils/validators/index'
  // import VabIcon from '@/layout/vab-icon'
  export default {
    name: 'MenuItem',
    // components: { VabIcon },
    props: {
      item: {
        type: Object,
        default() {
          return null
        },
      },
      routeChildren: {
        type: Object,
        default: () => null,
      },
    },
    methods: {
      handleLink() {
        const routePath = this.routeChildren.fullPath
        const target = this.routeChildren.meta.target
        if (target === '_blank') {
          if (isExternal(routePath)) {
            window.open(routePath)
          } else if (this.$route.path !== routePath) {
            window.open(routePath.href)
          }
        } else {
          if (isExternal(routePath)) {
            window.location.href = routePath
          } else if (this.$route.path !== routePath) {
            this.$router.push(routePath)
          }
        }
      },
    },
  }
</script>
