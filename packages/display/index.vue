<template>
  <div class="zv-display">
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
      type: String
    },
    content: {
      type: String
    }
  }
})
</script>
