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
          <zv-dropdown :item-lists="itemLists2" :item-render="renderItme">
        hahha3
      </zv-dropdown>
  </div>
</template>
```
```js
<script>
export default {
  name: 'DropdownDemo',
  data() {
    return {
      itemLists1: [
        {
          name: 'a'
        },
        {
          name: 'b'
        },
        { name: 'c' }
      ],
      itemLists2: [1, 2, 3]
    }
  },
  methods: {
    renderItme(item) {
      return <ZvButton>{item}</ZvButton>
    }
  }
}
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `itemLists` | `下拉菜单的内容list`     | `Array` | - | - |
| `itemRender` | `下拉菜单的渲染函数`     | `Function` | - | - |
| Attributes和element-ui中的dropdown一样 |

## methods

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| methods和element-ui中的dropdown一样 |