<template>
  <el-tag v-bind="$attrs" v-on="$listeners" class="zv-tag" effect="dark">
    <slot />
  </el-tag>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Tag'
})
</script>
