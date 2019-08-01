# Check 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

基于element-ui的radio/check组件进行改造的组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<check-demo></check-demo>

::: demo

```html
<template>
  <div>
    <div class="list">
      <zv-check
        v-model="value9"
        :check-items="checkItems"
        @change="handleChange"
        @item-change="handleItemChange"
      />
    </div>
    <div class="list">
      <zv-check
        v-model="value10"
        :check-items="checkItems1"
        check-type="radio"
      />
    </div>
  </div>
</template>
```
```js
<script>
export default {
  name: 'CheckDemo',
  data() {
    return {
      value9: [],
      value10: 'A',
      checkItems1: ['A', 'B', 'C'],
      checkItems: [
        {
          label: 'A',
          disabled: true
        },
        {
          label: 'B',
          disabled: false
        },
        {
          label: 'C'
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    handleItemChange(value) {
      console.log(1, value)
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
| `checkType` | `单选模式还是多选模式` | `String` | `checkbox | radio` | `checkbox` |
| `checkItems` | `渲染的选择数据，可传入的内容参考element-ui raido|check` | `Array` | - | `checkbox` |
| `labelName` | `指定以哪个字段的内容来作为label展示` | `String` | - | - |
| `labelName` | `指定以哪个字段的内容来作为label展示` | `String` | - | - |
| Attributes和element-ui中的raido-group/check-group一样(目前不支持插槽功能) |

## Events

<!-- {.md} -->

| 事件名称      | 说明                                   | 回调参数   |
| --------- | -------------------------------------- |--------- |
| change  | v-model绑定的值发生改变时出发 |  更新后的值 |
| item-change  | 点击了选择和不选时触发的事件 |  更新后的值 |
