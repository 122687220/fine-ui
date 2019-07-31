<template>
  <el-link v-bind="$attrs" v-on="$listeners" icon="">
    <slot />
  </el-link>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Link'
})
</script>
