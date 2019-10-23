<template>
  <div>
    <zv-table-operate
      trigger="click"
      :params="itemLists1"
      @command="commandHandler"
    />
  </div>
</template>

<script>
export default {
  name: 'TableOperateDemo',
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
        {
          name: 'c',
          command: 'c'
        }
      ]
    }
  },
  methods: {
    commandHandler(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped></style>
