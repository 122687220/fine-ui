<template>
  <zv-tabs v-model="activeName" :tab-pane="tabPane">
    <div style="width: 100%" slot="first">
      用户登入
    </div>

    <div style="width: 100%" slot="second">
      短信登录
    </div>
  </zv-tabs>
</template>

<script>
export default {
  name: 'TabsDemo',
  data() {
    return {
      activeName: 'first',
      tabPane: [
        {
          label: '用户登入',
          name: 'first'
        },
        {
          label: '短信登录',
          name: 'second'
        }
      ]
    }
  }
}
</script>
