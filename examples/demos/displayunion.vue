<template>
  <zv-display-union :data-source="dataSource" :render-lists="renderLists" empty-value="--" />
</template>

<script>
export default {
  name: 'DisplayUnionDemo',
  data() {
    return {
      dataSource: {
        a: 1,
        b: 3,
        c: 23,
        address: '湖南省的一个好地方',
        content:
          '这是一个超级超级长的内容，。。。。撒个哦个iwegowiejgwiegjweog  围观围观降温这是一个超级超级长的内容，。。。。撒个哦个iwegowiejgwiegjweog  围观围观降温这是一个超级超级长的内容，。。。。撒个哦个iwegowiejgwiegjweog  围观围观降温'
      },
      renderLists: [
        {
          title: 'ttt',
          keyword: 'a'
        },
        {
          title: 't2332',
          keyword: 'adf'
        },
        {
          title: 't2332',
          keyword: 'b'
        },
        {
          title: 'sfsesgewe',
          keyword: 'address'
        },
        {
          title: '长内容',
          keyword: 'content',
          flex: 1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
