# TableOperate 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

表格操作的组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<table-operate-demo></table-operate-demo>

::: demo

```html
<template>
  <div>
    <zv-table-operate
      trigger="click"
      :params="itemLists1"
      @command="commandHandler"
    />
  </div>
</template>
```
```js
export default {
  name: 'TableOperateDemo',
  data() {
    return {
      itemLists1: [
        {
          name: 'a',
          command: 'a'
        },
        {
          name: 'b',
          command: 'b'
        },
        {
          name: 'c',
          command: 'c'
        }
      ]
    }
  },
  methods: {
    commandHandler(item) {
      console.log(item)
    }
  }
}
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| Attributes和dropdown一样 |
| params | 所有的列表 |  Array |  |  | 


## methods

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| methods和dropdown一样 |
