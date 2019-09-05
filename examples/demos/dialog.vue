<template>
  <div>
    <example-wrapper>
      <zv-button @click="dialogVisible1 = true">
        打开dialog
      </zv-button>
      <zv-button @click="locale = 'en_US'">
        切换语言
      </zv-button>
    </example-wrapper>
    <example-wrapper>
      <zv-button @click="dialogVisible2 = true">
        打开带表单dialog
      </zv-button>
    </example-wrapper>
    <zv-dialog v-model="dialogVisible1">
      这是个提示消息
    </zv-dialog>
    <zv-dialog
      v-model="dialogVisible2"
      width="440px"
      bodyHeight="200px"
      :showClose="true"
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
    </zv-dialog>
  </div>
</template>

<script>
import ExampleWrapper from './ExampleWrapper'

export default {
  name: 'DialogDemo',
  components: { ExampleWrapper },
  data() {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      name: '',
      locale: 'zh_CN'
    }
  }
}
</script>

<style scoped></style>
