<template>
  <div class="zv-progress">
    <el-progress v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Progress'
})
</script>
