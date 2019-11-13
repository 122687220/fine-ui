<template>
  <div class="zv-sub-title">
    <span class="zv-sub-title__main">
      <slot>{{ localeLang.default || '二级标题' }}</slot>
    </span>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default create({
  name: 'SubTitle',
  mixins: [langMixins],
  computed: {
    localeLang() {
      return lang[this.localLocale] || {}
    }
  }
})
</script>
