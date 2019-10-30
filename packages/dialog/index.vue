<template>
  <el-dialog
    custom-class="zv-dialog"
    :title="title || localeLang.title || '取消'"
    :visible.sync="currentValue"
    :close-on-click-modal="false"
    :width="width"
    @closed="closed"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-scrollbar :style="bodyStyle" class="el-dialog__body__default">
      <slot />
    </el-scrollbar>
    <div
      slot="footer"
      class="dialog-footer"
      v-if="btnList.length || ($slots.right && $slots.right[0]) || ($slots.left && $slots.left[0])"
    >
      <slot name="left" />
      <zv-button
        class="zv-dialog__footerbtn"
        @click="currentValue = false"
        v-if="btnList.includes('cancel')"
        fun-id="dialog-cancel"
      >
        {{ localeLang.cancel || '取消' }}
      </zv-button>
      <zv-button
        type="primary"
        @click="submit"
        v-if="btnList.includes('submit')"
        fun-id="dialog-submit"
      >
        {{ localeLang.sure || '确定' }}
      </zv-button>
      <slot name="right" />
    </div>
  </el-dialog>
</template>

<script>
import create from '../utils/create-basic'
import ZvModel from '../mixins/zv-model'
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default create({
  name: 'Dialog',
  mixins: [ZvModel, langMixins],
  props: {
    width: {
      type: String,
      default: '640px'
    },
    bodyHeight: {
      type: String,
      default: '300px'
    },
    title: {
      type: String
    },
    btnList: {
      type: Array,
      default() {
        return ['cancel', 'submit']
      }
    }
  },
  computed: {
    bodyStyle() {
      return {
        height: this.bodyHeight
      }
    },
    localeLang() {
      return lang[this.localLocale] || {}
    }
  },
  methods: {
    submit(e) {
      this.$emit('submit', e)
    },
    closed(e) {
      this.$emit('closed', e)
    }
  }
})
</script>
