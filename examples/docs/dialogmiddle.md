# 中型弹窗 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

中型弹窗组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<dialog-middle-demo></dialog-middle-demo>

::: demo

```html
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
```
```js
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
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `v-model `     | `控制隐现`                                 | - | -      | -         |
| `elementName`      | `宽高已该元素的宽高为标准`                                 | `String` | -      | -         |
| `componentName`      | `宽高已该组件的宽高为标准`                                 | `String` | -      | -         |

## slot

<!-- {.md} -->

| 插槽名称      | 说明                                   |
| --------- | -------------------------------------- |
| `default`  | `默认插槽`                                 |


## methods

<!-- {.md} -->

| 事件名称      | 说明                                   |
| --------- | -------------------------------------- |
| `close-dialog`  | `点击关闭的时候触发的事件`                                 |
