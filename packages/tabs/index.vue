<template>
  <div class="zv-tabs">
    <el-tabs v-model="currentValue" v-bind="$attrs" v-on="$listeners">
      <slot />
    </el-tabs>
  </div>
</template>

<script>
import ZvModel from '../mixins/zv-model'
import create from '../utils/create-basic'
export default create({
  name: 'Tabs',
  mixins: [ZvModel]
})
</script>
