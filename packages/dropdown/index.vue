<template>
  <el-dropdown class="zv-dropdown" v-bind="$attrs" v-on="$listeners">
    <div>
      <slot
        ><span>{{ localeLang.default || '点击触发下拉框' }}</span></slot
      >
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
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default create({
  name: 'Dropdown',
  mixins: [langMixins],
  props: {
    itemLists: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    localeLang() {
      return lang[this.localLocale] || {}
    }
  }
})
</script>
