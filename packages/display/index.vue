<template>
  <div class="zv-display" :class="{ default: type === 'default' }">
    <p class="zv-display__title">{{ title }}</p>
    <section class="zv-display__content">{{ content }}</section>
  </div>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Display',
  props: {
    title: {
      type: [String, Number]
    },
    content: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: '',
      validator: function(value) {
        return ['', 'default'].includes(value)
      }
    }
  }
})
</script>
