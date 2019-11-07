<template>
  <div>
    <div>
      <zv-button @click="changeTableSelectState">
        切换某几行的勾选状态
      </zv-button>
      <zv-button @click="clearTableSelectState">
        333
      </zv-button>
    </div>
    <zv-table ref="myTable" :tableData="tableData" :params="tableParam" @select="handleSelect" />
    <zv-table
      ref="myTable"
      style="margin-top: 60px;"
      :tableData="tableData"
      :params="tableParam1"
      @select="handleSelect"
    />
  </div>
</template>

<script>
export default {
  name: 'TableDemo',
  data() {
    const self = this
    return {
      itemLists1: [
        {
          name: '编辑',
          command: 'a'
        },
        {
          name: 'b',
          command: 'b'
        },
        {
          name: 'c',
          command: 'c'
        }
      ],
      tableParam: {
        haveCheckBox: true,
        height: 300,
        columns: [
          {
            prop: 'status',
            label: '状态',
            render: {
              default: ({ row }) => {
                const { status = '0' } = row
                return <span>{['亮仔', '大宝贝', '约吗', '约吗', '约吗'][status]}</span>
              }
            }
          },
          { prop: 'name', label: '名称' },
          { prop: 'address', label: '地址', width: `200px`, align: 'center' },
          { prop: 'content', label: '内容', width: `200px`, sortable: true },
          { prop: 'date', label: '日期', width: `200px` },
          { prop: 'count', label: '金额', width: `200px` },
          {
            prop: 'operate',
            label: '操作',
            align: 'right',
            render: {
              // 自定义列表表头
              header: ({ column }) => {
                console.log(column)
                return <span>ddd</span>
              },
              // 自定义列表内容区域
              default: ({ row }) => <zv-button onClick={() => self.click(row)}>dddd</zv-button>
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
                return <span>{['亮仔', '大宝贝', '约吗', '约吗', '约吗'][status]}</span>
              }
            }
          },
          { prop: 'name', label: '名称', width: `200px` },
          { prop: 'address', label: '地址', width: `200px`, align: 'center' },
          { prop: 'content', label: '内容', width: `200px`, sortable: true },
          { prop: 'date', label: '日期', width: `200px` },
          // {
          //   prop: 'count',
          //   label: '金额',
          //   align: 'center',
          //   columns: [
          //     { prop: 'count1', label: '日金额' },
          //     { prop: 'count2', label: '周金额' },
          //     { prop: 'count3', label: '月金额' }
          //   ]
          // },
          {
            prop: 'operate',
            label: '操作',
            align: 'center',
            fixed: 'right',
            width: '160px',
            showOverflowTooltip: '0',
            render: function({ row }) {
              return (
                <zv-table-operate
                  trigger="click"
                  params={self.itemLists1}
                  onCommand={command => self.commandHandler(command, row)}
                />
              )
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
      this.$refs.myTable.toggleSelection([this.tableData])
    },
    currentChange(val) {
      console.log(val)
    },
    handleSelect(val) {
      console.log('所选择的数据为：' + val)
    },
    click(row) {
      console.log(row)
    },
    commandHandler(item, row) {
      console.log(item, row)
    },
    clearTableSelectState() {
      this.$refs.myTable.toggleSelection()
    }
  }
}
</script>

<style scoped></style>
