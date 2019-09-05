# Tabs 组件

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
  <zv-tabs v-model="activeName" :tab-pane="tabPane">
    <div style="width: 100%" slot="first">
      用户登入
    </div>

    <div style="width: 100%" slot="second">
      短信登录
    </div>
  </zv-tabs>
</template>
```
```js
<script>
export default {
  name: 'TabsDemo',
  data() {
    return {
      activeName: 'first',
      tabPane: [
        {
          label: '用户登入',
          name: 'first'
        },
        {
          label: '短信登录',
          name: 'second'
        }
      ]
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
| svgColor      | svg 图颜色                                 | `String` | -      | -         |
| tabPane      | tab-pane                                 | `Array` | -      | -         |

## slot

<!-- {.md} -->

| 插槽名称      | 说明                                   |
| --------- | -------------------------------------- |
| tabPane对应的name插槽  |                                |  
