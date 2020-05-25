<template>
  <div class="zv-dialog__fullscreen" v-show="currentValue">
    <div class="zv-dialog__fullscreen-nav" :style="barStyle">
      <div class="zv-dialog__fullscreen-nav-left">
        <slot name="left" />
      </div>

      <div class="zv-dialog__fullscreen-nav-title">{{ title }}</div>

      <div class="zv-dialog__fullscreen-nav-right">
        <slot name="right" />
      </div>
    </div>
    <div class="zv-dialog__fullscreen-container">
      <slot />
    </div>
  </div>
</template>

<script>
import ZvModel from '../mixins/zv-model'
import create from '../utils/create-basic'
export default create({
  name: 'DialogFullscreen',
  mixins: [ZvModel],
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#7cb342'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    barStyle() {
      const style = {
        'background-color': this.backgroundColor,
        color: this.textColor
      }
      if (this.backgroundColor === '#fff' || this.backgroundColor === '#ffffff') {
        style['border-bottom'] = '1px solid #eeeeee'
        style.color = '#212121'
      }
      return style
    }
  }
})
</script>
