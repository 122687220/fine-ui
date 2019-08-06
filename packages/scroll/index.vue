<template>
  <el-scrollbar :style="style" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-scrollbar>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Scroll',
  props: {
    height: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      return {
        height: this.height
      }
    }
  }
})
</script>
