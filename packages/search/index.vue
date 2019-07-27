<template>
  <div :class="['zv-search', showBtn ? 'zv-search--show' : '']">
    <el-input
      :placeholder="placeholder"
      v-model="currentValue"
      @blur="onBlur"
      @keyup.enter.native="onKeyupEnter"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <div v-if="showBtn" class="zv-search__text" @click="onSearch">
      搜索
    </div>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import ZvModel from '../mixins/zv-model'
export default create({
  name: 'Search',
  mixins: [ZvModel],
  props: {
    showBtn: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default() {
        return '请输入搜索内容'
      }
    }
  },
  methods: {
    onSearch() {
      this.$emit('on-search', this.currentValue)
    },
    onBlur() {
      this.$emit('on-blur', this.currentValue)
    },
    onKeyupEnter(e) {
      let keyCode = window.event ? e.keyCode : e.which
      if (keyCode === 13) {
        this.$emit('on-keyup-enter', this.currentValue)
      }
    }
  }
})
</script>
