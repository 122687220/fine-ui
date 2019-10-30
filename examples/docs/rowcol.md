# row/col 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

基于element-ui的row/col组件进行改造的组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<row-col-demo></row-col-demo>

::: demo

```html
<template>
  <div>
    <zv-row :gutter="20">
      <zv-col :span="24"><div class="grid-content bg-purple-dark"></div></zv-col>
    </zv-row>
    <zv-row>
      <zv-col :span="12"><div class="grid-content bg-purple"></div></zv-col>
      <zv-col :span="12"><div class="grid-content bg-purple-light"></div></zv-col>
    </zv-row>
    <zv-row>
      <zv-col :span="8"><div class="grid-content bg-purple"></div></zv-col>
      <zv-col :span="8"><div class="grid-content bg-purple-light"></div></zv-col>
      <zv-col :span="8"><div class="grid-content bg-purple"></div></zv-col>
    </zv-row>
    <zv-row>
      <zv-col :span="6"><div class="grid-content bg-purple"></div></zv-col>
      <zv-col :span="6"><div class="grid-content bg-purple-light"></div></zv-col>
      <zv-col :span="6"><div class="grid-content bg-purple"></div></zv-col>
      <zv-col :span="6"><div class="grid-content bg-purple-light"></div></zv-col>
    </zv-row>
    <zv-row>
      <zv-col :span="4"><div class="grid-content bg-purple"></div></zv-col>
      <zv-col :span="4"><div class="grid-content bg-purple-light"></div></zv-col>
      <zv-col :span="4"><div class="grid-content bg-purple"></div></zv-col>
      <zv-col :span="4"><div class="grid-content bg-purple-light"></div></zv-col>
      <zv-col :span="4"><div class="grid-content bg-purple"></div></zv-col>
      <zv-col :span="4"><div class="grid-content bg-purple-light"></div></zv-col>
    </zv-row>
  </div>
</template>
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| Attributes和element-ui中的row/col一样 |

