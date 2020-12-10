<!--
 * @Author: fangLong
 * @Date: 2020-12-09 19:04:01
 * @LastEditTime: 2020-12-10 16:11:19
-->
<template>
  <div class="multiple-tabs">
    <!-- <a-tabs type="editable-card" size="small" :animated="false" hideAdd :tabBarGutter="3" v-model:activeKey="activeKey"> -->
    <a-tabs
      type="editable-card"
      size="small"
      :animated="false"
      hideAdd
      :tabBarGutter="3"
      v-model:activeKey="activeKeyRef"
    >
      <a-tab-pane
        :tab="tag.name"
        v-for="tag in visitedTags"
        :key="tag.fullPath"
        :closable="!isAffix(tag)"
        @onChange="handleTagChange"
      />
    </a-tabs>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useTagsView } from '../../hooks/useTagsView'

  export default defineComponent({
    name: 'TagsView',
    components: {},
    setup() {
      // console.log('hooks')
      const activeKeyRef = ref('')
      const { visitedTags, isAffix, cachedTages, handleTagChange } = useTagsView()
      return {
        visitedTags,
        isAffix,
        cachedTages,
        handleTagChange,
        activeKeyRef,
      }
    },
  })
</script>
<style lang="less">
  @import './index.less';
</style>
