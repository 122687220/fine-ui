<template>
  <el-form v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-form>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Form'
})
</script>
