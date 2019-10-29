<template>
  <div>
    <div>
      <zv-tag class="tags" effect="dark">主要链接</zv-tag>
      <zv-tag class="tags" effect="dark" type="success">成功链接</zv-tag>
      <zv-tag class="tags" effect="dark" type="warning">警告链接</zv-tag>
      <zv-tag class="tags" effect="dark" type="danger">危险链接</zv-tag>
      <zv-tag class="tags" effect="dark" type="info">信息链接</zv-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagDemo'
}
</script>

<style lang="scss" scoped>
.tags {
  margin-left: 20px;
}
</style>
