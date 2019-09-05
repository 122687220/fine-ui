<script>
import create from '../../utils/create-basic'
import ZvModel from '../../mixins/zv-model'
import checkValidator from './validator/index'
import BlockForm from './BlockForm'
import { deepCopy } from '../../utils/index'

export default create({
  name: 'BlockForm2',
  mixins: [ZvModel],
  render(h) { // eslint-disable-line
    const { $attrs, $listeners, currentValue } = this
    const { schema } = deepCopy($attrs)
    for (const key in schema) {
      if (schema[key].validator && schema[key].validator.length) {
        if (!schema[key].rules) schema[key].rules = []
        schema[key].validator.forEach(([valida, args]) => {
          if (checkValidator[valida]) {
            schema[key].rules.unshift(checkValidator[valida](args))
          }
        })
      }
    }

    const attrs = Object.assign({}, $attrs, { schema })
    // 最终的渲染函数
    return (
      <BlockForm vModel={currentValue} {...{ attrs, listeners: $listeners }} />
    )
  }
})
</script>
