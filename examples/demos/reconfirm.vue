<template>
  <div>
    <zv-link type="primary" @click="openDialog">命令式打开弹窗</zv-link>
    <zv-link type="primary" @click="openDialog1">命令式打开弹窗</zv-link>
  </div>
</template>

<script>
export default {
  name: 'ReconfirmDemo',
  methods: {
    openDialog() {
      this.$reconfirm({
        title: '提示',
        content: '明清提示一下咯'
      })
        .then(({ type, instance }) => {
          console.log(1, type, instance)
          instance.closeDialog()
        })
        .catch(({ type, instance }) => {
          console.log(2, type, instance)
          instance.closeDialog()
        })
    },
    openDialog1() {
      this.$reconfirm({
        title: '提示',
        content: 'jsx插入',
        btnList: ['submit'],
        contentRender() {
          return <ZvButton>fdfdf</ZvButton>
        }
      })
        .then(({ type, instance }) => {
          console.log(1, type, instance)
          instance.closeDialog()
        })
        .catch(({ type, instance }) => {
          console.log(2, type, instance)
          instance.closeDialog()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  margin-bottom: 10px;
}
</style>
