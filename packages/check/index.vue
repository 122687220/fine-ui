<template>
  <div class="zv-select-check">
    <template v-if="checkType === 'checkbox'">
      <el-checkbox-group v-model="currentValue" v-bind="$attrs" v-on="$listeners">
        <el-checkbox
          v-for="(item, index) in checkItems"
          v-bind="item[labelName] ? item : {}"
          :key="index"
          @change="handleItemChange"
        />
      </el-checkbox-group>
    </template>

    <template v-else>
      <el-radio-group v-model="currentValue" v-bind="$attrs" v-on="$listeners">
        <el-radio
          v-for="(item, index) in checkItems"
          :key="index"
          :label="item[labelName] ? item[labelName] : item"
          v-bind="item[labelName] ? item : {}"
          @change="handleItemChange"
        />
      </el-radio-group>
    </template>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import ZvModel from '../mixins/zv-model'
export default create({
  name: 'Check',
  mixins: [ZvModel],
  props: {
    checkType: {
      type: String,
      default: 'checkbox',
      validator: function(value) {
        return ['checkbox', 'radio'].indexOf(value) >= 0
      }
    },
    checkItems: {
      type: Array,
      default() {
        return []
      }
    },
    labelName: {
      type: String,
      default: 'label'
    }
  },
  methods: {
    handleItemChange(value) {
      this.$emit('item-change', value)
    }
  }
})
</script>
