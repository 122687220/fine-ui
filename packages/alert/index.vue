<template>
  <div class="zv-alert">
    <div>
      <svg-icon slot="suffix" icon-class="info-circle" class="zv-alert__svg" :style="svgStyle" />
      <slot />
    </div>
    <slot name="right" />
  </div>
</template>

<script>
import SvgIcon from '../svg/index'
import create from '../utils/create-basic'
export default create({
  name: 'Alert',
  components: { SvgIcon },
  props: {
    svgColor: {
      type: String
    }
  },
  computed: {
    svgStyle() {
      return {
        color: this.svgColor
      }
    }
  }
})
</script>
