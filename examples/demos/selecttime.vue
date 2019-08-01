<template>
  <div>
    <div class="list">
      <zv-select-time
        v-model="value2"
        time-type="monthrange"
        placeholder="请选择"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        clearable
      />
    </div>
    <div class="list">
      <zv-select-time v-model="value1" placeholder="请选择" clearable />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectTimeDemo',
  data() {
    return {
      value1: '',
      value2: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 5px 0;
}
</style>
