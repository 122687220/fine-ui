<template>
  <div>
    <zv-table-footer
      :have-check-box="haveCheckBox"
      :total="1000"
      :current-page.sync="currentPage"
    />
    <zv-table-footer
      :total="1000"
      :current-selected-number="20"
      :current-page.sync="currentPage"
    >
      编辑
    </zv-table-footer>
  </div>
</template>

<script>
export default {
  name: 'TableFooterDemo',
  data() {
    return {
      currentPage: 6,
      haveCheckBox: false
    }
  },
  watch: {
    currentPage(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
