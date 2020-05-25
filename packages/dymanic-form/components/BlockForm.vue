<template>
  <zv-form :model="currentValue" :style="formStyle" ref="blockForm">
    <template v-if="schema">
      <zv-form-item
        :prop="index"
        :rules="item.rules"
        v-for="(item, index) in schema"
        :key="index"
        :class="[
          item.componentType === 'SelectTime' && item.timeType.includes('range')
            ? 'zv-form__block'
            : '',
          'zv-dymanic-form__item'
        ]"
      >
        <zv-input
          v-model="currentValue[index]"
          v-if="item.componentName === 'ZvInput'"
          :label="item.label || ''"
          :icon="item.icon || ''"
          :width-type="item.widthType || 'default'"
          v-bind="item"
          @clickIcon="iconfunction(item)"
          @change="handleChange(item)"
          v-on="item.methods"
        />
        <zv-select-label
          v-model="currentValue[index]"
          v-if="item.componentName === 'ZvSelectLabel'"
          :title="item.title || ''"
          :width-type="item.widthType || 'default'"
          :row="!!item.row"
          :is-required="!!item.isRequired"
          :component-name="item.componentType || 'Select'"
          v-bind="item"
          @change="handleChange(item)"
          v-on="item.methods"
        />
        <div v-bind="item" v-if="item.componentName === 'ZvEmptyBlock'"></div>
      </zv-form-item>
    </template>
    <slot />
  </zv-form>
</template>

<script>
import create from '../../utils/create-basic'
import ZvModel from '../../mixins/zv-model'
import { dispatch } from '../../mixins/emitter'
import ZvForm from '../../form/index'
import ZvFormItem from '../../form-item/index'
import ZvSelectLabel from '../../select-label/index'
import ZvInput from '../../input/index'

export default create({
  name: 'BlockForm',
  mixins: [ZvModel],
  components: {
    ZvForm,
    ZvFormItem,
    ZvSelectLabel,
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
        if (this.schema[key].componentName === 'ZvEmptyBlock') continue
        this.setValueKey(this, this.currentValue, key)
      }
    },
    setValueKey(target, value, key) {
      if (!value[key]) {
        target.$set(value, key, '')
      }
    },
    validate(func) {
      if (typeof func === 'function') {
        this.$refs['blockForm'].$children[0].validate(valid => {
          func(valid)
        })
      } else {
        return new Promise(resolve => {
          this.$refs['blockForm'].$children[0].validate(valid => {
            resolve(valid)
          })
        })
      }
    },
    resetFields() {
      this.$refs['blockForm'].$children[0].resetFields()
    },
    clearValidate() {
      this.$refs['blockForm'].$children[0].clearValidate()
    }
  }
})
</script>
