<template>
  <div>
    <div class="list">
      <zv-link href="//www.zoomlion.com" target="_blank">默认链接</zv-link>
      <zv-link type="primary">主要链接</zv-link>
      <zv-link type="success">成功链接</zv-link>
      <zv-link type="warning">警告链接</zv-link>
      <zv-link type="danger">危险链接</zv-link>
      <zv-link type="info">信息链接</zv-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkDemo'
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  margin-bottom: 10px;
}
</style>
