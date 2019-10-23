# TableFooter 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

表格底部的组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<table-footer-demo></table-footer-demo>

::: demo

```html
<template>
  <div>
    <zv-table-footer
      :have-check-box="haveCheckBox"
      :total="1000"
      :current-page.sync="currentPage"
    />
    <zv-table-footer :total="1000" :current-page.sync="currentPage">
      编辑
    </zv-table-footer>
  </div>
</template>
```
```js
export default {
  name: 'TableFooterDemo',
  data() {
    return {
      currentPage: 6,
      haveCheckBox: false
    }
  },
  watch: {
    currentPage(value) {
      console.log(value)
    }
  }
}
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| Attributes和element-ui中的pagination一样 |
| haveCheckBox | 是否需要展示左侧部分 |  Boolean | true/false | true | 
| currentSelectedNumber | 已选数量 |  Number |  |  | 

## methods

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| methods和element-ui中的pagination一样 |
