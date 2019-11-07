<template>
  <div>
    <div>
      <zv-dropdown :item-lists="itemLists1" trigger="click" @command="handlerCommand">
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
          name: 'a',
          command: 'a'
        },
        {
          name: 'b',
          command: 'b'
        },
        { name: 'c', command: 'c' }
      ],
      itemLists2: [1, 2, 3]
    }
  },
  methods: {
    renderItme(item) {
      return <ZvButton>{item}</ZvButton>
    },
    handlerCommand(command) {
      console.log(command)
    }
  }
}
</script>

<style lang="scss" scoped></style>
