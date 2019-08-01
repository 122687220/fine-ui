<template>
  <el-dialog
    custom-class="zv-dialog"
    :title="title"
    :visible.sync="currentValue"
    :close-on-click-modal="false"
    :width="width"
    @closed="closed"
    :modal-append-to-body="false"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-scrollbar :style="bodyStyle" class="el-dialog__body__default">
      <slot />
    </el-scrollbar>
    <div
      slot="footer"
      class="dialog-footer"
      v-if="
        btnList.length ||
          ($slots.right && $slots.right[0]) ||
          ($slots.left && $slots.left[0])
      "
    >
      <slot name="left" />
      <zv-button
        class="zv-dialog__footerbtn"
        @click="currentValue = false"
        v-if="btnList.includes('cancel')"
        fun-id="dialog-cancel"
      >
        取消
      </zv-button>
      <zv-button
        type="primary"
        @click="submit"
        v-if="btnList.includes('submit')"
        fun-id="dialog-submit"
      >
        确定
      </zv-button>
      <slot name="right" />
    </div>
  </el-dialog>
</template>

<script>
import create from '../utils/create-basic'
import ZvModel from '../mixins/zv-model'
export default create({
  name: 'Dialog',
  mixins: [ZvModel],
  props: {
    width: {
      type: String,
      default: '440px'
    },
    bodyHeight: {
      type: String,
      default: '300px'
    },
    title: {
      type: String,
      default: '提示'
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
