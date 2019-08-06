# Table 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

表格组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<table-demo></table-demo>

::: demo

```html
<template>
  <div>
    <div>
      <zv-button @click="changeTableSelectState">
        切换某几行的勾选状态
      </zv-button>
    </div>
    <zv-table
      ref="myTable"
      :tableData="tableData"
      :params="tableParam"
      @select="handleSelect"
    />
    <zv-table
      ref="myTable"
      style="margin-top: 60px;"
      :tableData="tableData"
      :params="tableParam1"
      @select="handleSelect"
    />
  </div>
</template>
```
```js
<script>
export default {
  name: 'TableDemo',
  data() {
    const self = this
    return {
      tableParam: {
        isCheckAll: false,
        haveCheckBox: true,
        height: 300,
        columns: [
          {
            prop: 'status',
            label: '状态',
            width: `200px`,
            render: {
              default: ({ row }) => {
                const { status = '0' } = row
                return (
                  <span>
                    {['亮仔', '大宝贝', '约吗', '约吗', '约吗'][status]}
                  </span>
                )
              }
            }
          },
          { prop: 'name', label: '名称', width: `200px` },
          { prop: 'address', label: '地址', width: `200px`, align: 'center' },
          { prop: 'content', label: '内容', width: `200px`, sortable: true },
          { prop: 'date', label: '日期', width: `200px` },
          { prop: 'count', label: '金额', width: `200px` },
          {
            prop: 'operate',
            label: '操作',
            align: 'right',
            render: {
              default: ({ row }) => (
                <zv-button onClick={() => self.click(row)}>dddd</zv-button>
              )
            }
          }
        ]
      },
      tableParam1: {
        isCheckAll: false,
        haveCheckBox: true,
        height: 500,
        columns: [
          {
            prop: 'status',
            label: '状态',
            width: `200px`,
            render: {
              default: ({ row }) => {
                const { status = '0' } = row
                return (
                  <span>
                    {['亮仔', '大宝贝', '约吗', '约吗', '约吗'][status]}
                  </span>
                )
              }
            }
          },
          { prop: 'name', label: '名称', width: `200px` },
          { prop: 'address', label: '地址', width: `200px`, align: 'center' },
          { prop: 'content', label: '内容', width: `200px`, sortable: true },
          { prop: 'date', label: '日期', width: `200px` },
          {
            prop: 'count',
            label: '金额',
            align: 'center',
            columns: [
              { prop: 'count1', label: '日金额' },
              { prop: 'count2', label: '周金额' },
              { prop: 'count3', label: '月金额' }
            ]
          },
          {
            prop: 'operate',
            label: '操作',
            align: 'right',
            fixed: 'right',
            render: function({ row }) {
              return <zv-button onClick={() => self.click(row)}>dddd</zv-button>
            }
          }
        ]
      },
      tableData: [
        {
          status: '0',
          address: '',
          name: '张三',
          content: { name: 'location', type: 'icon', content: '坐标' },
          date: '2019-03-10',
          count: '231',
          create_name: '发布人1'
        },
        {
          status: '1',
          name: '张三',
          address: '104.406315, 39.658775',
          content: 'neirsadaong132432432432545435345435345434534534534543534',
          date: '2019-03-10',
          count: '2313',
          create_name: '发布人1',
          isDisabled: true
        },
        {
          status: '2',
          name: '张三',
          address: '110.406315, 39.932575',
          content: 'neirsadaong1',
          date: '2019-03-10',
          count: '231',
          create_name: '发布人1'
        },
        {
          status: '3',
          name: '张三',
          address: '113.406315, 42.908775',
          content: 'neirsadaong1',
          date: '2019-03-10',
          count: '231',
          create_name: '发布人1'
        },
        {
          status: '4',
          name: '张三',
          address: '115.406315, 35.908775',
          content: 'neirsadaong1',
          date: '2019-03-10',
          count: '231',
          create_name: '发布人1',
          isDisabled: true
        },
        {
          status: '4',
          name: '张三',
          address: '107.406315, 37.909575',
          content: 'neiasdarong2',
          date: '2019-03-11',
          count: '52231',
          create_name: '发布人2'
        },
        {
          status: '4',
          name: '张三',
          address: '106.406315, 39.625775',
          content: 'neirgong3',
          date: '2019-03-12',
          count: '6231',
          create_name: '发布人3',
          isDisabled: true
        },
        {
          status: '4',
          name: '张三',
          address: '117.406315, 42.908775',
          content: 'neir',
          date: '2019-03-14',
          count: '1231',
          create_name: '发布人4'
        }
      ]
    }
  },
  methods: {
    changeTableSelectState() {
      this.$refs.myTable.toggleSelection([this.tableData[0]])
    },
    currentChange(val) {
      console.log(val)
    },
    handleSelect(val) {
      console.log('所选择的数据为：' + val)
    },
    click(row) {
      console.log(row)
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
| `tableData`      | `表格数据`                                 | `Array` | -      | []         |
| `params`      | `表格配置项`                                 | `String` | -      | -         |

## params详细说明

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `haveCheckBox`      | `是否需要列表多选框`                                 | `Boolean` | `true | false`      | `false`         |
| `height`      | `表格高度配置项，需要进行设置才可以固定表头`                                 | `string/number` | -      | -         |
| `max-height`      | `表格 的最大高度。合法的值为数字或者单位为 px 的高度。`                                 | `string/number` | -      | -         |
| `colunms`      | `表格 每栏的详细配置`                                 | `Array` | -      | -         |

## colunms详细说明

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `prop`      | `指定该列是渲染哪个数据字段`                                 | `String` | `-`      | `-`         |
| `label`      | `指定该列表头是渲染什么名称`                                 | `string` | -      | -         |
| `width`      | `指定该列的宽度`                                 | `string` | -      | `200px`         |
| `align`      | `对齐方式`                                 | `String` | `left/center/right`      | `left`         |
| `fixed`      | `列是否固定在左侧或者右侧，true 表示固定在左侧`                                 | `string, boolean` | `true, left, right`      | `-`         |
| `render`      | `列的自定义渲染函数，参数对象是分为header,default两个属性值,传函数时默认是default`                                 | `Object | function` | `-`      | `-`         |

## methods

<!-- {.md} -->

| 事件      | 说明                                   | 默认值         |
| --------- | -------------------------------------- | -------- |
| `select`  | `选择时触发的事件`                                 |  `当前选择的数据Array` |
