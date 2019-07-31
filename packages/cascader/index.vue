<template>
  <el-cascader class="zv-cascader" v-bind="$attrs" v-on="$listeners">
    <template slot-scope="{ node, data }">
      <slot v-bind:node="node" v-bind:data="data" />
    </template>
  </el-cascader>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Cascader'
})
</script>
