<template>
  <div class="zv-title">
    <div class="zv-title__left">
      <div>{{ title || localeLang.title || '标题' }}</div>
      <div class="zv-title__left-sub">
        {{ subTitle || localeLang.subTitle || '副标题' }}
      </div>
    </div>
    <div class="zv-title__right">
      <slot />
    </div>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default create({
  name: 'Title',
  mixins: [langMixins],
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    }
  },
  computed: {
    localeLang() {
      return lang[this.localLocale] || {}
    }
  }
})
</script>
