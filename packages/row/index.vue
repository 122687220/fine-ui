<script>
import create from '../utils/create-basic'
export default create({
  name: 'Row',
  render(h) {  // eslint-disable-line
    const { $attrs, $slots } = this
    return (
      <ElRow class="zv-row" {...{ props: $attrs }}>
        {$slots.default}
      </ElRow>
    )
  }
})
</script>
