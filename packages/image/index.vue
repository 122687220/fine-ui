<script>
import create from '../utils/create-basic'
export default create({
  name: 'Image',
  render(h) {  // eslint-disable-line
    const { $attrs, $listeners, $slots } = this
    console.log($attrs)
    return (
      <ElImage class="zv-image" {...{ props: $attrs, on: $listeners }}>
        {Object.entries($slots).map(([name, slot]) => (
          <template slot={name}>{slot}</template>
        ))}
      </ElImage>
    )
  }
})
</script>
