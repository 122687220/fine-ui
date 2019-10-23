# SelectLabel 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

选择（有标题）组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<select-label-demo></select-label-demo>

::: demo

```html
<template>
  <div>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        placeholder="请选择"
        component-name="Select"
        title="机型"
        row
      />
    </example-wrapper>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        placeholder="请选择"
        component-name="Select"
        title="机型"
      />
    </example-wrapper>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        placeholder="请选择"
        component-name="Select"
        width-type="big"
        title="机型"
      />
    </example-wrapper>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        placeholder="请选择"
        component-name="Select"
        width-type="super"
        title="机型"
      />
    </example-wrapper>
  </div>
</template>
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `title`      | `标题名`                                 | `String` | -      | -         |
| `row`      | `是否是在同一行`                                 | `Boolean` | `true | false`      | `false`         |
| `isRequired`      | `是否需要必须*的符号`                                 | `Boolean` | `true | false`      | `false`         |
| `componentName`      | `当前组件是`                                 | `String` | `Select | SelectTime | Check`      | `Select`         |
| widthType      | 宽度大小(row为false,同时组件为select时)                                | `String` | `default | super`      | -         |

