# Title 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

一级标题组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<title-demo></title-demo>

::: demo

```html
<template>
  <div>
    <example-wrapper>
      <zv-title title="测试" sub-title="有点小帅">
        <zv-button>dfsdfdf</zv-button>
        <zv-button style="margin-left: 8px;">aaaaa</zv-button>
      </zv-title>
    </example-wrapper>
  </div>
</template>
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| title      | 主标题                                 | `String` | -      | -         |
| subTitle      | 副标题                                 | `String` | -      | -         |

## slot

<!-- {.md} -->

| 插槽名称      | 说明                                   |
| --------- | -------------------------------------- |
| default  | 默认插槽                                 | 
