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
<tabs-demo></tabs-demo>

::: demo

```html
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
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| svgColor      | svg 图颜色                                 | `String` | -      | -         |

## slot

<!-- {.md} -->

| 插槽名称      | 说明                                   |
| --------- | -------------------------------------- |
| default  | 默认插槽                                 | 
| right  | 右侧插槽                                 | 
