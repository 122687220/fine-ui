<script>
import create from '../utils/create-basic'
import Display from '../display'
import Row from '../row'
import Col from '../col'

export default create({
  name: 'DisplayUnion',
  props: {
    // 数据源
    dataSource: {
      type: Object,
      default() {
        return {}
      }
    },
    // 需要渲染的内容集合
    renderLists: {
      type: Array,
      default: []
    },
    emptyValue: {
      type: String,
      default: ''
    }
  },
  render(h) { // eslint-disable-line
    let { dataSource, renderLists, emptyValue } = this
    // 最终的渲染函数
    const ColArray = renderLists.map(item => {
      const span = item.flex ? 24 : 8
      const type = item.flex ? '' : 'default'
      return (
        <Col span={span}>
          <Display
            type={type}
            title={item.title || ''}
            content={dataSource[item.keyword] || emptyValue}
          />
        </Col>
      )
    })
    return <Row>{ColArray}</Row>
  }
})
</script>
