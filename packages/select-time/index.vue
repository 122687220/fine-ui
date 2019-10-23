<template>
  <div
    :class="[
      'zv-select-time',
      timeType.includes('range') ? 'zv-select-time--daterange' : '',
      $attrs.disabled ? 'is-disabled' : ''
    ]"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <el-date-picker
      ref="timer"
      v-model="currentValue"
      prefix-icon="el-icon-circle"
      :type="timeType"
      clear-icon=""
      v-bind="$attrs"
      v-on="$listeners"
    />
    <svg-icon
      :icon-class="timeIcon"
      class="zv-select-time-icon el-input__icon el-icon-date"
      :class="[timeIcon === 'cancel' ? 'zv-select-time_cursor' : '']"
      @click.native="resetTime"
    />
  </div>
</template>

<script>
import create from '../utils/create-basic'
import ZvModel from '../mixins/zv-model'
import SvgIcon from '../svg/index'
export default create({
  name: 'SelectTime',
  mixins: [ZvModel],
  components: { SvgIcon },
  props: {
    timeType: {
      type: String,
      default: 'date'
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timeIcon: 'calendar'
    }
  },
  methods: {
    mouseenter() {
      if (this.clearable && this.currentValue) {
        if (Array.isArray(this.currentValue) && this.currentValue[0]) {
          if (this.currentValue[0]) {
            this.timeIcon = 'cancel'
          }
          return
        }
        this.timeIcon = 'cancel'
      }
    },
    mouseleave() {
      if (this.clearable && this.timeIcon === 'cancel') {
        this.timeIcon = 'calendar'
      }
    },
    resetTime() {
      if (this.timeIcon === 'calendar') {
        if (this.$refs.timer.$children.length) {
          this.$refs.timer.$children[0].focus()
        } else {
          this.$refs.timer.focus()
        }
        return
      }
      const currentValue = this.currentValue
      if (Object.prototype.toString.call(currentValue) === '[object Array]') {
        this.currentValue = []
      } else {
        this.currentValue = ''
      }
    }
  }
})
</script>
