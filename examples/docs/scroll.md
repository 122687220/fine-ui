# Scroll 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

自定义滚动组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<scroll-demo></scroll-demo>

::: demo

```html
<template>
  <div>
    <zv-scroll height="100px">
      <div v-for="(item, index) in 100" :key="index">
        {{ item }}
      </div>
    </zv-scroll>
  </div>
</template>
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| height      | 内容的显示区域（必须填，不然无效）                                 | `String` | -      | -         |

