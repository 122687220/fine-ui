<template>
  <div>
    <div class="list">
      <zv-search />
    </div>

    <div class="list">
      <zv-search showBtn />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchDemo'
}
</script>

<style lang="scss" scoped>
.list {
  margin: 5px 0;
}
</style>
