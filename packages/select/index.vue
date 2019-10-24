<template>
  <div class="zv-select">
    <div class="zv-select-default">
      <el-select v-model="currentValue" v-bind="$attrs" v-on="$listeners">
        <el-option
          v-for="(item, index) in options"
          :key="item.value ? item.value : index"
          :label="item.label ? item.label : item"
          :value="item.value ? item.value : index"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import ZvModel from '../mixins/zv-model'
export default create({
  name: 'Select',
  mixins: [ZvModel],
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>
