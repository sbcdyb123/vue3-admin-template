<!--
 * @Author: fangLong
 * @Date: 2020-12-09 19:04:01
 * @LastEditTime: 2020-12-10 01:39:11
-->
<template>
  <div class="multiple-tabs">
    <!-- <a-tabs type="editable-card" size="small" :animated="false" hideAdd :tabBarGutter="3" v-model:activeKey="activeKey"> -->
    <a-tabs type="editable-card" size="small" :animated="false" hideAdd :tabBarGutter="3">
      <a-tab-pane
        :tab="tag.name"
        v-for="tag in visitedTags"
        :key="tag.fullpath"
        :closable="!isAffix(tag)"
      />
    </a-tabs>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { useTagsView } from '../../hooks'

  export default defineComponent({
    name: 'TagsView',
    components: {},
    setup() {
      // console.log('hooks')
      const { visitedTags, isAffix } = useTagsView()
      return {
        visitedTags,
        isAffix,
      }
    },
  })
</script>
<style lang="less">
  @import './index.less';
</style>
