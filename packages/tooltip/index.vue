<template>
  <el-tooltip v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-tooltip>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Tooltip'
})
</script>
