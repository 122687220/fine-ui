<template>
  <zv-pagination :total="1000" :current-page.sync="currentPage" />
</template>

<script>
export default {
  name: 'PaginationDemo',
  data() {
    return {
      currentPage: 6
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
