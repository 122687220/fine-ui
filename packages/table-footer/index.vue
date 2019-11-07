<template>
  <div class="zv-table__footer">
    <div class="zv-table__footer-left">
      <template v-if="haveCheckBox">
        <div class="zv-table__footer-show">
          {{ localeLang.selected || '已选' }} {{ currentSelectedNumber }}
        </div>
        <div class="zv-table__footer-operate" v-if="$slots.default">
          <slot />
        </div>
      </template>
    </div>
    <pagination :page-sizes="pageSizes" :layout="layout" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import create from '../utils/create-basic'
import Pagination from './../pagination'
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default create({
  name: 'TableFooter',
  components: { Pagination },
  mixins: [langMixins],
  props: {
    currentSelectedNumber: {
      type: Number
    },
    haveCheckBox: {
      type: Boolean,
      default: true
    },
    pageSizes: {
      type: Array
    },
    layout: {
      type: String
    }
  },
  computed: {
    localeLang() {
      return lang[this.localLocale] || {}
    }
  }
})
</script>
