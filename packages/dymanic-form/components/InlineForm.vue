<template>
  <zv-form :model="currentValue" :style="formStyle" ref="inlineForm">
    <template v-if="schema">
      <component
        v-for="(item, index) in schema"
        v-model="currentValue[index]"
        :is="item.componentName"
        :key="index"
        style="margin-right: 8px;"
        v-bind="item"
        :widthType="item.widthType || 'default'"
        @change="handleChange(item)"
        @clickIcon="iconfunction(item)"
      />
    </template>
    <slot />
  </zv-form>
</template>

<script>
import create from '../../utils/create-basic'
import ZvModel from '../../mixins/zv-model'
import ZvForm from '../../form/index'
import ZvSelect from '../../select/index'
import ZvSelectTime from '../../select-time/index'
import ZvInput from '../../input/index'
import { dispatch } from '../../mixins/emitter'

export default create({
  name: 'InlineForm',
  mixins: [ZvModel],
  components: {
    ZvForm,
    ZvSelect,
    ZvSelectTime,
    ZvInput
  },
  props: {
    formStyle: {
      type: Object,
      default() {
        return {
          display: 'flex',
          justifyItems: 'flex-start',
          flexWrap: 'wrap'
        }
      }
    },
    schema: {
      type: Object
    }
  },
  created() {
    this.initValue()
  },
  methods: {
    dispatch,
    handleChange(item) {
      this.dispatch('ZvDymanicForm', 'change', item)
    },
    iconfunction(item) {
      this.dispatch('ZvDymanicForm', 'clickIcon', item)
    },
    initValue() {
      for (const key in this.schema) {
        // 循环将所有的值都设置为可响应的  后续可设置为嵌套递归的方式
        this.setValueKey(this, this.currentValue, key)
      }
    },
    setValueKey(target, value, key) {
      if (!value[key]) {
        target.$set(value, key, '')
      }
    }
  }
})
</script>
