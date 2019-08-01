# SelectTime 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

时间选择组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<select-time-demo></select-time-demo>

::: demo

```html
<template>
  <div>
    <div class="list">
      <zv-select-time
        v-model="value2"
        time-type="monthrange"
        placeholder="请选择"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        clearable
      />
    </div>
    <div class="list">
      <zv-select-time v-model="value1" placeholder="请选择" clearable />
    </div>
  </div>
</template>
```
```js
<script>
export default {
  name: 'SelectTimeDemo',
  data() {
    return {
      value1: '',
      value2: ''
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
| Attributes和element-ui中的timePicker一样 |
