<template>
  <div>
    <zv-scroll height="100px">
      <div v-for="(item, index) in 100" :key="index">
        {{ item }}
      </div>
    </zv-scroll>
  </div>
</template>

<script>
export default {
  name: 'ScrollDemo'
}
</script>

<style lang="scss" scoped></style>
