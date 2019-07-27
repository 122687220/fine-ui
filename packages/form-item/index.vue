<template>
  <el-form-item
    v-bind="$attrs"
    v-on="$listeners"
    :class="[inline ? 'zv-form-item__inline' : 'zv-form-item__normal']"
  >
    <slot />
  </el-form-item>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'FormItem',
  props: {
    inline: {
      type: Boolean,
      default: false
    }
  }
})
</script>
