<template>
  <div class="zv-dialog__middle" v-if="currentValue">
    <div class="zv-dialog__middle-box" :style="eleStyle">
      <el-scrollbar class="height100">
        <slot></slot>
      </el-scrollbar>
      <div class="zv-dialog__middle-close" @click="closeDialog">X</div>
    </div>
  </div>
</template>

<script>
import ZvModel from '../mixins/zv-model'
import { findComponentUpward } from '../utils/index'
import create from '../utils/create-basic'
export default create({
  name: 'DialogMiddle',
  mixins: [ZvModel],
  props: {
    elementName: {
      type: String,
      default: ''
    },
    componentName: {
      type: String,
      default: 'AppMain'
    }
  },
  data() {
    return {
      eleStyle: {
        width: 0,
        height: 0
      }
    }
  },
  mounted() {
    let clientWidth = document.documentElement.clientWidth
    let clientHeight = document.documentElement.clientHeight
    let eleNode = {
      clientWidth: `calc(100vw - 80px)`,
      clientHeight: `calc(100vh - 104px)`
    }
    let needAddUnit = false
    if (this.elementName) {
      eleNode = document.querySelector(this.elementName)
      needAddUnit = true
    } else if (this.componentName) {
      const findedComponent = findComponentUpward(this, this.componentName)
      eleNode = findedComponent.$el
      needAddUnit = true
    }
    if (needAddUnit) {
      eleNode = {
        clientWidth:
          eleNode.clientWidth > clientWidth ? clientWidth - 80 : eleNode.clientWidth - 32,
        clientHeight:
          eleNode.clientHeight > clientHeight ? clientHeight - 104 : eleNode.clientHeight - 16
      }
    }
    this.eleStyle = {
      width: needAddUnit ? `${eleNode.clientWidth}px` : eleNode.clientWidth,
      height: needAddUnit ? `${eleNode.clientHeight}px` : eleNode.clientHeight
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog')
    }
  }
})
</script>
