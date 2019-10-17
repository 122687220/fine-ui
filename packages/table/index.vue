<script>
import create from '../utils/create-basic'
export default create({
  name: 'Table',
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    params: {
      type: Object,
      default() {
        return {
          height: {
            type: Number,
            default: ''
          },
          maxHeight: {
            type: Number,
            default: ''
          },
          haveCheckBox: {
            type: Boolean,
            default: false
          },
          columns: {
            type: Array,
            default() {
              return []
            },
            required: true
          }
        }
      }
    }
  },
  data() {
    return {
      refresh: false
    }
  },
  computed: {
    tableLoading() {
      return this.params.columns && this.params.columns.length > 0
    },
    tableMaxHeight() {
      return document.body.clientHeight - 208
    }
  },
  watch: {
    'params.columns'() {
      this.refresh = true
      this.$nextTick(() => {
        this.refresh = false
      })
    }
  },
  methods: {
    /**
     * @author 肖景
     * @date 2019/8/5
     * @description 勾选表格数据触发的函数
     */
    handleSelect(val) {
      this.$emit('select', val)
    },
    /**
     * @author 肖景
     * @date 2019/8/5
     * @description 切换表格的选择
     */
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    /**
     * @author 肖景
     * @date 2019/8/5
     * @description 表格内容为禁用状态时的样式
     */
    rowDisabledStyle(row) {
      return row.row.isDisabled ? 'rowDisabled' : ''
    },
    /**
     * @author 肖景
     * @date 2019/8/5
     * @description 表格内容为禁用状态
     */
    selectInit(row) {
      return !row.isDisabled
    }
  },
  render(h) { // eslint-disable-line
    const {
      tableData,
      tableMaxHeight,
      handleSelect,
      rowDisabledStyle,
      params,
      selectInit
    } = this

    // 是否需要多选列表的情况
    const checkComponent = params.haveCheckBox ? (
      <el-table-column
        align="center"
        type="selection"
        selectable={selectInit}
      />
    ) : null

    // 每列的渲染函数
    const scopedSlots = ({ prop, render = '' }) => {
      if (typeof render === 'function') {
        render = {
          default: render
        }
      }

      return (
        render || {
          default: ({ row }) => (
            <span class="zv-table_cell-content">
              {row[prop] && row[prop].name ? row[prop].name : row[prop]}
            </span>
          )
        }
      )
    }

    // 递归出所有的列组件
    const columnsComponent = columns =>
      columns.map((column, index) => {
        return (
          <el-table-column
            fixed={column.fixed}
            align={column.align || `left`}
            min-width="100px"
            width={column.width || `200px`}
            prop={column.prop}
            key={index}
            sortable={column.sortable}
            label={column.label}
            showOverflowTooltip={column.showOverflowTooltip || true}
            scopedSlots={scopedSlots(column)}
          >
            {column.columns ? columnsComponent(column.columns) : []}
          </el-table-column>
        )
      })

    // 最终的渲染函数
    return (
      <div class="zv-table">
        <div class="zv-table_container">
          <el-table
            ref="multipleTable"
            data={tableData}
            width="100%"
            onSelect={handleSelect}
            onSelect-all={handleSelect}
            rowClassName={rowDisabledStyle}
            headerRowClassName="zv-table_header-class"
            height={params.height ? params.height : params.maxHeight}
            maxHeight={params.maxHeight || tableMaxHeight}
          >
            {checkComponent}
            {columnsComponent(params.columns)}
          </el-table>
        </div>
      </div>
    )
  }
})
</script>
