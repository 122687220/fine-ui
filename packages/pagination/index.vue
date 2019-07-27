<template>
  <div class="zv-pagination">
    <el-pagination
      v-bind="$attrs"
      v-on="$listeners"
      :page-sizes="pageSizes"
      :layout="layout ? layout : 'total, sizes, prev, pager, next, jumper'"
    />
  </div>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'Pagination',
  props: {
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 40, 100]
      }
    },
    layout: {
      type: String,
      default: ''
    }
  }
})
</script>
