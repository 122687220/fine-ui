<template>
  <inline-form
    v-model="currentValue"
    v-bind="$attrs"
    v-on="$listeners"
    v-if="type === 'inline'"
  >
    <slot></slot>
  </inline-form>
  <block-form2
    ref="form"
    v-model="currentValue"
    v-bind="$attrs"
    v-on="$listeners"
    v-else
  >
    <slot></slot>
  </block-form2>
</template>

<script>
import create from '../utils/create-basic'
import ZvModel from '../mixins/zv-model'
import InlineForm from './components/InlineForm'
import BlockForm2 from './components/BlockForm2'

export default create({
  name: 'DymanicForm',
  mixins: [ZvModel],
  components: {
    InlineForm,
    BlockForm2
  },
  props: {
    type: {
      type: String,
      default: 'block',
      validator(value) {
        return ['block', 'inline'].includes(value)
      }
    }
  },
  methods: {
    validate(func) {
      if (this.type === 'inline') return
      if (typeof func === 'function') {
        this.$refs['form'].$children[0].validate(func)
      } else {
        return this.$refs['form'].$children[0].validate()
      }
    },
    resetFields() {
      if (this.type === 'inline') return
      this.$refs['form'].$children[0].resetFields()
    },
    clearValidate() {
      if (this.type === 'inline') return
      this.$refs['form'].$children[0].clearValidate()
    }
  }
})
</script>
