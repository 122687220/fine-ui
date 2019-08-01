<template>
  <div class="zv-title">
    <div class="zv-title__left">
      <div>{{ title }}</div>
      <div class="zv-title__left-sub">{{ subTitle }}</div>
    </div>
    <div class="zv-title__right">
      <slot />
    </div>
  </div>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Title',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    subTitle: {
      type: String,
      default: '副标题'
    }
  }
})
</script>
