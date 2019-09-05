<template>
  <div>
    <example-wrapper>
      <zv-button @click="dialogVisible1 = true">
        打开dialog
      </zv-button>
    </example-wrapper>
    <example-wrapper>
      <zv-button @click="dialogVisible2 = true">
        打开dialog
      </zv-button>
    </example-wrapper>
    <zv-dialog-middle
      v-model="dialogVisible1"
      elementName=".view"
      componentName="app"
    >
      <div style="height: 310px;">
        <zv-input
          label="登录密码"
          placeholder="请输入您的登录密码"
          type="textarea"
          labelTop
          v-model="name"
        />
      </div>
    </zv-dialog-middle>
    <zv-dialog-middle v-model="dialogVisible2" componentName="app">
      <div style="height: 310px;">
        <zv-input
          label="登录密码"
          placeholder="请输入您的登录密码"
          type="textarea"
          labelTop
          v-model="name"
        />
      </div>
    </zv-dialog-middle>
  </div>
</template>

<script>
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'DialogMiddleDemo',
  components: { ExampleWrapper },
  data() {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      name: ''
    }
  }
}
</script>

<style scoped></style>
