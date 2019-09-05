# Input 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

Input组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<input-demo></input-demo>

::: demo

```html
<template>
  <div class="example-input">
    <example-wrapper class="lists">
      <zv-input
        label="登录密码"
        placeholder="请输入您的登录密码"
        textRight
        v-model="name1"
      />
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
      <zv-input
        label="登录密码"
        placeholder="请输入您的登录密码"
        labelTop
        v-model="name3"
      />
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
  </div>
</template>
```
```js
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
      name4: ''
    }
  },
  methods: {
    alert() {
      this.$message({
        message: '332',
        type: 'warning'
      })
    }
  }
}
</script>
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| label      | 标题                                 | `String` | -      | -         |
| icon      | 图标的名称                                | `String` | -      | -         |
| widthType      | 宽度大小(labelTop和showBorder都存在是有效)                                | `String` | `default | big | super`      | -         |
| 其余参考element-ui的input组件        |
