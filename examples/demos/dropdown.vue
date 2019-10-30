<template>
  <div>
    <div>
      <zv-dropdown :item-lists="itemLists1" trigger="click">
        hahha
      </zv-dropdown>
    </div>

    <div>
      <zv-dropdown :item-lists="itemLists2">
        hahha
      </zv-dropdown>
    </div>

    <div>
      <zv-dropdown :item-lists="itemLists2" :item-render="renderItme">
        hahha3
      </zv-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownDemo',
  data() {
    return {
      itemLists1: [
        {
          name: 'a'
        },
        {
          name: 'b'
        },
        { name: 'c' }
      ],
      itemLists2: [1, 2, 3]
    }
  },
  methods: {
    renderItme(item) {
      return <ZvButton>{item}</ZvButton>
    }
  }
}
</script>

<style lang="scss" scoped></style>
