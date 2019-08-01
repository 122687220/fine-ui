<template>
  <el-dropdown class="zv-dropdown" v-bind="$attrs" v-on="$listeners">
    <div>
      <slot><span>点击触发下拉框</span></slot>
    </div>
    <el-dropdown-menu slot="dropdown" v-if="itemLists.length">
      <el-dropdown-item
        v-for="(item, index) in itemLists"
        :key="index"
        v-bind="item.name ? item : {}"
      >
        {{ item.name ? item.name : item }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Dropdown',
  props: {
    itemLists: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>
