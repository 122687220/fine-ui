# Alert 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

提示组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<search-demo></search-demo>

::: demo

```html
<template>
  <div>
    <div class="list">
      <zv-search />
    </div>

    <div class="list">
      <zv-search showBtn />
    </div>
  </div>
</template>
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| showBtn      | 是否显示搜索按钮                                 | `Boolean` | `true | false`      | `false`         |
| placeholder      | 输入框中显示的文字内容                                 | `String` | -      | `请输入搜索内容`         |

## slot

<!-- {.md} -->

| 插槽名称      | 说明                                   |
| --------- | -------------------------------------- |
| prefix  | 搜索图标的插槽                                 | 

## Events

<!-- {.md} -->

| 事件名称      | 说明                                   | 回调参数   |
| --------- | -------------------------------------- |--------- |
| on-search  | 点击按钮时触发的事件                                 | value |
| on-blur  | 输入框失去焦点时触发的事件                                 | value |
| on-keyup-enter  | 键盘上按下enter键时触发的事件                                 | value |