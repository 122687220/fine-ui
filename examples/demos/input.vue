<template>
  <div class="example-input">
    <example-wrapper class="lists">
      <zv-input label="登录密码" placeholder="请输入您的登录密码" textRight v-model="name1" />
    </example-wrapper>
    <example-wrapper class="lists">
      <zv-input
        label="登录密码"
        placeholder="请输入您的登录密码"
        icon="see1"
        v-model="name2"
        @keyup.enter.native="alert()"
      />
    </example-wrapper>
    <example-wrapper class="lists">
      <zv-input label="登录密码" placeholder="请输入您的登录密码" labelTop v-model="name3" />
    </example-wrapper>

    <example-wrapper class="lists">
      <zv-input
        label="登录密码"
        placeholder="请输入您的登录密码"
        type="textarea"
        labelTop
        v-model="name3"
      />
    </example-wrapper>

    <example-wrapper class="lists">
      <zv-input
        label="登录密码388383"
        placeholder="请输入您的登录密码"
        labelTop
        readonly
        showBorder
        v-model="name10"
        icon="baojing"
        @clickIcon="clickIcon"
      />
    </example-wrapper>

    <example-wrapper class="lists">
      <zv-input
        label="登录密码"
        placeholder="请输入您的登录密码"
        labelTop
        showBorder
        v-model="name4"
      />
    </example-wrapper>

    <example-wrapper class="lists">
      <zv-input
        label="登录密码"
        placeholder="请输入您的登录密码"
        type="textarea"
        labelTop
        showBorder
        v-model="name4"
      />
    </example-wrapper>
    <example-wrapper class="lists">
      <zv-input
        placeholder="请输入您的登录密码"
        labelTop
        showBorder
        widthType="default"
        v-model="name4"
      />
      <zv-input
        placeholder="请输入您的登录密码"
        labelTop
        showBorder
        widthType="default"
        v-model="name4"
      />
    </example-wrapper>
    <example-wrapper class="lists">
      <zv-input
        placeholder="请输入您的登录密码"
        labelTop
        showBorder
        widthType="big"
        v-model="name4"
      />
    </example-wrapper>
    <example-wrapper class="lists">
      <zv-input
        placeholder="请输入您的登录密码"
        labelTop
        showBorder
        widthType="super"
        v-model="name4"
      />
    </example-wrapper>
  </div>
</template>

<script>
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'InputDemo',
  components: { ExampleWrapper },
  data() {
    return {
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      name10: 10
    }
  },
  methods: {
    alert() {
      this.$message({
        message: '332',
        type: 'warning'
      })
    },
    clickIcon() {
      console.log('33')
    }
  }
}
</script>

<style scoped>
.example-input {
  margin-left: 40px;
  width: 600px;
}
</style>
