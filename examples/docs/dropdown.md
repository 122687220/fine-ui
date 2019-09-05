# Dropdown 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

提示组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<dropdown-demo></dropdown-demo>

::: demo

```html
<template>
  <div>
    <div>
      <zv-dropdown :item-lists="itemLists1">
        hahha
      </zv-dropdown>
    </div>

    <div>
      <zv-dropdown :item-lists="itemLists2">
        hahha
      </zv-dropdown>
    </div>
  </div>
</template>
```
```js
<script>
import create from '../utils/create-basic'
export default create({
  name: 'Dropdown',
  props: {
    itemLists: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `item-lists` | `下拉菜单的内容list`     | `Array` | - | - |
| Attributes和element-ui中的dropdown一样 |

## methods

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| methods和element-ui中的dropdown一样 |