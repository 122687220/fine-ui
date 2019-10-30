<template>
  <div class="zv-button" @click="clickBtn">
    <el-button :style="buttonStyle" v-bind="$attrs">
      <zv-svg-icon class="zv-button__icon" v-if="icon !== ''" :icon-class="icon" />
      <slot />
    </el-button>
  </div>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Button',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      time: null
    }
  },
  computed: {
    buttonStyle() {
      if (this.$attrs.size === 'large') {
        return {
          width: '360px',
          height: '44px'
        }
      } else if (!this.$attrs.size && this.$attrs.type !== 'text') {
        return {
          'min-width': '10px',
          height: '32px',
          'font-size': '12px'
        }
      }
      return {}
    }
  },
  methods: {
    /** 2019-07-25
     * @Author: 肖景
     * @Desc: 函数截流 1秒钟内只允许触发一次
     */
    clickBtn(e) {
      if (this.time && this.time > Date.now() - 1000) {
        return
      }
      this.time = Date.now()
      this.$emit('click', { event: e })
    }
  }
})
</script>
