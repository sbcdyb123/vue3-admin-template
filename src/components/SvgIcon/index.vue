<!--
 * @Author: fangLong
 * @Date: 2020-12-07 00:07:11
 * @LastEditTime: 2020-12-17 14:25:55
-->
<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" />
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
  // doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
  import { isExternal } from '@/utils/validators/index'

  export default {
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      isExternal() {
        return isExternal(this.iconClass)
      },
      iconName() {
        return `#icon-${this.iconClass}`
      },
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      },
      styleExternalIcon() {
        return {
          mask: `url(${this.iconClass}) no-repeat 50% 50%`,
          '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`,
        }
      },
    },
  }
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
  }

  .svg-external-icon {
    display: inline-block;
    background-color: currentColor;
    mask-size: cover !important;
  }
</style>
