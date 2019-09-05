# Button 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

基于element-ui的button组件进行改造的组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<button-demo></button-demo>

::: demo

```html
<template>
  <div>
    <div class="list">
      <zv-button size="large" type="primary">
        操作按钮
      </zv-button>
      <zv-button size="large" type="primary" :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button size="large" type="primary" plain>
        操作按钮
      </zv-button>
      <zv-button size="large" type="primary" plain :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="primary">
        操作按钮
      </zv-button>
      <zv-button type="primary" :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button>
        操作按钮
      </zv-button>
      <zv-button :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="primary" plain>
        操作按钮
      </zv-button>
      <zv-button type="primary" plain :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="warning">
        操作按钮
      </zv-button>
      <zv-button type="warning" :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="warning" icon="audit">
        操作按钮
      </zv-button>
      <zv-button type="warning" :disabled="true" icon="audit">
        操作按钮
      </zv-button>
    </div>
  </div>
</template>
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| icon      | svg 图                                 | `String` | -      | -         |
| 其他的Attributes和element-ui中的button一样 |

## Events

<!-- {.md} -->

| 事件名称      | 说明                                   | 回调参数   |
| --------- | -------------------------------------- |--------- |
| click  | 内部做了对应的事件截流（1000ms）                                 | (event: Event) |
