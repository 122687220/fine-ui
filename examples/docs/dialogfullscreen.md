# DialogFullscreen 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

全面屏弹窗组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<dialog-fullscreen-demo></dialog-fullscreen-demo>

::: demo

```html
<template>
  <div>
    <zv-alert svg-color="red">
      <span>提示内容</span>
      <template v-slot:right>
        <zv-button type="warning" :disabled="true" fun-id="exampleForm_test">
          操作按钮
        </zv-button>
      </template>
    </zv-alert>

    <zv-alert svg-color="yellow" style="background-color: orange">
      <span>提示内容</span>
      <template v-slot:right>
        <zv-button type="warning" :disabled="true" fun-id="exampleForm_test">
          操作按钮
        </zv-button>
      </template>
    </zv-alert>
  </div>
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
