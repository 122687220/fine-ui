<template>
  <div class="zv-table__operate">
    <template v-if="params.length">
      <zv-link
        :type="params[0].type || 'primary'"
        @click.native="commandHanlder(params[0].command)"
      >
        {{ params[0].name }}
      </zv-link>
      <zv-dropdown
        v-if="params.length > 1"
        :item-lists="moreParams"
        v-bind="$attrs"
        @command="commandHanlder"
      >
        <zv-link type="primary">{{ localeLang.more || '更多操作' }}</zv-link>
      </zv-dropdown>
    </template>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import ZvLink from './../link'
import ZvDropdown from './../dropdown'
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default create({
  name: 'TableOperate',
  components: { ZvLink, ZvDropdown },
  mixins: [langMixins],
  props: {
    params: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    moreParams() {
      return this.params.length > 1 ? this.params.slice(1) : []
    },
    localeLang() {
      return lang[this.localLocale] || {}
    }
  },
  methods: {
    commandHanlder(command) {
      this.$emit('command', command)
    }
  }
})
</script>
