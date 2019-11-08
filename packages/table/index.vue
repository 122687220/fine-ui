<script>
import create from '../utils/create-basic'
export default create({
  name: 'Table',
  props: {
    disableSelectAll: {
      type: Boolean,
      default: false
    },
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
     * @description 勾选表格数改变触发的函数
     */
    handleSelectChange(val) {
      this.$emit('select-change', val)
    },
    /**
     * @author 肖景
     * @date 2019/8/5
     * @description 切换表格的选择
     */
    toggleSelection(rows, selected) {
      if (rows) {
        rows.forEach(row => {
          if (Object.prototype.toString.call(selected) === '[object Function]') {
            this.$refs.multipleTable.toggleRowSelection(row, selected(row))
          } else {
            this.$refs.multipleTable.toggleRowSelection(row, selected)
          }
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
      if (this.params.disabledFunction) {
        return this.params.disabledFunction(row)
      }
      return row.row.isDisabled ? 'rowDisabled' : ''
    },
    /**
     * @author 肖景
     * @date 2019/8/5
     * @description 表格内容为禁用状态
     */
    selectInit(row) {
      if (this.params.disabledFunction) {
        return this.params.disabledFunction(row)
      }
      return !row.isDisabled
    },
    /**
     * @author 肖景
     * @date 2019/11/8
     * @description 表格行内点击
     */
    handleRowClick(row, column, event) {
      this.$emit('row-click', row, column, event)
    }
  },
  render(h) { // eslint-disable-line
    const {
      tableData,
      tableMaxHeight,
      handleSelect,
      rowDisabledStyle,
      params,
      selectInit,
      handleRowClick,
      disableSelectAll,
      handleSelectChange
    } = this

    // 是否需要多选列表的情况
    const checkComponent = params.haveCheckBox ? (
      <el-table-column
        align="center"
        type="selection"
        fixed="left"
        width="60px"
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
            width={column.width}
            prop={column.prop}
            key={index}
            sortable={column.sortable}
            label={column.label}
            showOverflowTooltip={column.showOverflowTooltip !== '0' && true}
            scopedSlots={scopedSlots(column)}
          >
            {column.columns ? columnsComponent(column.columns) : []}
          </el-table-column>
        )
      })

    // 最终的渲染函数
    return (
      <div class="zv-table">
        <div class={['zv-table_container', disableSelectAll ? 'zv-table_container-hidden' : '']}>
          <el-table
            ref="multipleTable"
            data={tableData}
            width="100%"
            onSelect={handleSelect}
            onSelect-all={handleSelect}
            onSelection-change={handleSelectChange}
            onRow-click={handleRowClick}
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
