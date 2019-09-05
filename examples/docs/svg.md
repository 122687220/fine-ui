# Svg 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

自定义的svg显示组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<svg-demo></svg-demo>

::: demo

```html
<template>
  <div class="svg-page__wrapper">
    <div v-for="(item, index) in showSVG" :key="index" class="svg-page__item">
      <zv-svg-icon :icon-class="item" :class-name="index % 2 ? 'red' : ''" />
      <div class="svg-page__title">{{ item }}</div>
    </div>
  </div>
</template>
```
```javascript
export default {
  name: 'SvgDemo',
  computed: {
    showSVG() {
      const svgs = []
      const requireAll = requireContext =>
        requireContext.keys().map(requireContext => {
          svgs.push(requireContext.replace('./', '').replace('.svg', ''))
          return requireContext
        })
      const req = require.context('../pc/icons/svg', false, /\.svg$/)
      requireAll(req)
      return svgs
    }
  }
}
```
```style
.svg-page__wrapper {
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 20px;
  .svg-page__item {
    padding: 10px;
    text-align: center;
    .svg-page__title {
      font-size: 14px;
      margin-top: 5px;
    }
  }
  .red {
    color: #e53935;
  }
}
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| iconClass  | svg 图                                 | `String` | -      | -         |
| className | svg 样式 | `String` | -      | - |
