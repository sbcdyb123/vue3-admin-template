<!--
 * @Author: fangLong
 * @Date: 2020-12-09 19:04:01
 * @LastEditTime: 2020-12-11 15:26:21
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
      @Change="handleTagChange"
      @edit="handleEdit"
    >
      <a-tab-pane v-for="tag in visitedTags" :key="tag.fullPath" :closable="!isAffix(tag)">
        <template #tab>
          <DropDown :title="tag.name" @menu-event="handleMenuEvent" :tag="tag" />
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { useDorpDown } from '../../hooks/useDropDown'
  import { useTagsView } from '../../hooks/useTagsView'
  import DropDown from '../DropDown/index.vue'
  export default defineComponent({
    name: 'TagsView',
    components: {
      DropDown,
    },
    setup() {
      // console.log('hooks')

      const {
        visitedTags,
        isAffix,
        cachedTages,
        handleTagChange,
        activeKeyRef,
        handleEdit,
      } = useTagsView() // tag缓存 基本设置
      const { handleMenuEvent } = useDorpDown()
      return {
        visitedTags,
        isAffix,
        cachedTages,
        handleTagChange,
        activeKeyRef,
        handleEdit,
        handleMenuEvent,
      }
    },
  })
</script>
<style lang="less">
  @import './index.less';
</style>
