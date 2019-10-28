# reconfirm 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

命令式调用弹窗,Promise链式调用，可在reslove,reject中获取弹窗实例，通过实例的currentValue来控制弹窗的显示

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<reconfirm-demo></reconfirm-demo>

::: demo
```js
export default {
  name: 'ReconfirmDemo',
  methods: {
    openDialog() {
      this.$reconfirm({
        title: '提示',
        content: '明清提示一下咯'
      })
        .then(({ type, instance }) => {
          console.log(1, type, instance)
          instance.closeDialog()
        })
        .catch(({ type, instance }) => {
          console.log(2, type, instance)
          instance.closeDialog()
        })
    }
  }
}
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| width      | 弹窗的宽度                                 | `String` | -      | `320px`         |
| bodyHeight      | 内容的高度                                 | `String` | -      | `152px`         |
| String      | 标题                                 | `String` | -      | ``         |
| btnList      | 按钮集合                                 | `Array` | `['cancel', 'submit']`      | `['cancel', 'submit']`         |
| content      | 内容（注意：当有contentRender函数时, content不会生效）                                | `String` |      | ``         |
| content      | 内容渲染函数,返回值用JSX来承载                                | `Function` |      |          |