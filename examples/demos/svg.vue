<template>
  <div class="svg-page__wrapper">
    <div v-for="(item, index) in showSVG" :key="index" class="svg-page__item">
      <zv-svg-icon :icon-class="item" :class-name="index % 2 ? 'red' : ''" />
      <div class="svg-page__title">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvgDemo',
  computed: {
    showSVG() {
      const svgs = []
      const requireAll = requireContext =>
        requireContext.keys().map(requireContext => {
          svgs.push(requireContext.replace('./', '').replace('.svg', ''))
          return requireContext
        })
      const req = require.context('../pc/icons/svg', false, /\.svg$/)
      requireAll(req)
      return svgs
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-page__wrapper {
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 20px;
  .svg-page__item {
    padding: 10px;
    text-align: center;
    .svg-page__title {
      font-size: 14px;
      margin-top: 5px;
    }
  }
  .red {
    color: #e53935;
  }
}
</style>
