<template>
  <div class="zv-select-label" :class="className">
    <div :class="[row ? 'zv-select--row' : '']">
      <div
        v-if="title.length"
        :class="['zv-select__title', isRequired ? 'zv-select--require' : '']"
      >
        {{ title }}
      </div>

      <component v-model="currentValue" :is="componentName" v-bind="$attrs" v-on="$listeners" />
    </div>
  </div>
</template>

<script>
import ZvModel from '../mixins/zv-model'
import create from '../utils/create-basic'
import Select from '../select/index'
import SelectTime from '../select-time/index'
import Check from '../check/index'
export default create({
  name: 'SelectLabel',
  mixins: [ZvModel],
  components: { Select, SelectTime, Check },
  props: {
    title: {
      type: String,
      default: ''
    },
    row: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    componentName: {
      type: String,
      default: 'Select',
      validator: function(value) {
        return ['Select', 'SelectTime', 'Check'].indexOf(value) >= 0
      }
    },
    widthType: {
      type: String,
      default: 'default',
      validator: function(value) {
        return ['default', 'big', 'super'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    className() {
      if (this.row || this.componentName === 'Check') {
        return 'super'
      } else if (this.componentName === 'SelectTime') {
        return ''
      }
      return this.widthType
    }
  }
})
</script>
