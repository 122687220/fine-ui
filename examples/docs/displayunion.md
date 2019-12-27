# Display 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

表单展示组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<display-union-demo></display-union-demo>

::: demo

```html
<zv-display-union :data-source="dataSource" :render-lists="renderLists" empty-value="--" />
```
```js
export default {
  name: 'DisplayUnionDemo',
  data() {
    return {
      dataSource: {
        a: 1,
        b: 3,
        c: 23,
        address: '湖南省的一个好地方',
        content:
          '这是一个超级超级长的内容，。。。。撒个哦个iwegowiejgwiegjweog  围观围观降温这是一个超级超级长的内容，。。。。撒个哦个iwegowiejgwiegjweog  围观围观降温这是一个超级超级长的内容，。。。。撒个哦个iwegowiejgwiegjweog  围观围观降温'
      },
      renderLists: [
        {
          title: 'ttt',
          keyword: 'a'
        },
        {
          title: 't2332',
          keyword: 'adf'
        },
        {
          title: 't2332',
          keyword: 'b'
        },
        {
          title: 'sfsesgewe',
          keyword: 'address'
        },
        {
          title: '长内容',
          keyword: 'content',
          flex: 1
        }
      ]
    }
  }
}
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `dataSource` | `内容的数据源`     | `Object` | - | '{}' |
| `renderLists` | `需要渲染的全部内容的集合`     | `Array` | - | '[]' | 
| `emptyValue` | `空内容时显示的内容`     | `String` | - | '' |

## renderLists 中 每一项的 Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `title` | `标题`     | `String | Number` | - | - |
| `keyword` | `需要渲染dataSource中的哪一项`     | `String | Number` | - | - | 
| `flex` | `占用1/3行 还是 1行`     | `Number` | - | '0' |
