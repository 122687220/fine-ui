<script>
import create from '../utils/create-basic'
export default create({
  name: 'Col',
  render(h) {  // eslint-disable-line
    const { $attrs, $slots } = this
    return (
      <ElCol class="zv-col" {...{ props: $attrs }}>
        {$slots.default}
      </ElCol>
    )
  }
})
</script>
