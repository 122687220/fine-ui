# Dialog 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

弹窗组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<dialog-demo></dialog-demo>

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
      :btn-list="['add']"
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
```
```js
<script>
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'DialogDemo',
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
| width      | `弹窗宽度`                                 | `String` | -      | `640px`         |
| bodyHeight      | `弹窗主体高度`                                 | `String` | -      | `300px`         |
| title      | `弹窗标题`                                | `String` | -      | `提示`         |
| btnList      | `默认下方按钮`                                | `Array` | `cancel | submit`      | `提示`         |

## slot

<!-- {.md} -->

| 插槽名称      | 说明                                   |
| --------- | -------------------------------------- |
| default  | 弹窗主体插槽                                 | 
| left  | 底部左侧插槽                                 |
| left  | 底部右侧插槽                                 |

## methods

<!-- {.md} -->

| 事件名称      | 说明                                   |
| --------- | -------------------------------------- |
| submit  | 点击确定触发的事件                                 | 
| closed  | 点击取消触发的事件                                 |