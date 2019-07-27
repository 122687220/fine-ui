<template>
  <zv-tabs v-model="activeName">
    <el-tab-pane label="用户登入" name="first">
      <div style="width: 100%">
        用户登入
      </div>
    </el-tab-pane>

    <el-tab-pane label="短信登录" name="second">
      <div style="width: 100%">
        短信登录
      </div>
    </el-tab-pane>
  </zv-tabs>
</template>

<script>
export default {
  name: 'TabsDemo',
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>
