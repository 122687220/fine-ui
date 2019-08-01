<template>
  <div
    :class="[
      'zv-input',
      className,
      $attrs.readonly === '' ? 'zv-input--readonly' : '',
      $attrs.textRight === '' ? 'zv-input--right' : '',
      $attrs.labelTop === '' ? 'zv-input--label-top' : '',
      $attrs.showBorder === '' ? 'zv-input--border' : '',
      $attrs.required === '' ? 'zv-input--require' : '',
      $attrs.type === 'textarea' ? 'zv-input--textarea' : ''
    ]"
  >
    <div class="zv-input__label" v-if="label">{{ label }}</div>
    <div class="zv-input__content">
      <el-input v-bind="$attrs" v-model="currentValue" v-on="$listeners">
        <template slot="append" v-if="$slots.append">
          <slot name="append" />
        </template>
        <svg-icon
          slot="suffix"
          @click.native="handleClick"
          :icon-class="icon"
        />
      </el-input>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import ZvModel from '../mixins/zv-model'
import SvgIcon from '../svg/index'
export default create({
  name: 'Input',
  mixins: [ZvModel],
  components: { SvgIcon },
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
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
      if (this.$attrs.labelTop === '' && this.$attrs.showBorder === '') {
        return this.widthType
      }
      return ''
    }
  },
  created() {
    console.log(this.$attrs)
  },
  handleClick() {
    this.$emit('clickIcon', this.currentValue)
  }
})
</script>
