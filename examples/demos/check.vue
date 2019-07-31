<template>
  <div>
    <div class="list">
      <zv-check
        v-model="value9"
        :check-items="checkItems"
        @change="handleChange"
        @item-change="handleItemChange"
      />
    </div>
    <div class="list">
      <zv-check
        v-model="value10"
        :check-items="checkItems"
        check-type="radio"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckDemo',
  data() {
    return {
      value9: [],
      value10: 'A',
      checkItems: [
        {
          label: 'A',
          disabled: true
        },
        {
          label: 'B',
          disabled: false
        },
        {
          label: 'C'
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    handleItemChange(value) {
      console.log(1, value)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  margin-bottom: 10px;
}
</style>
