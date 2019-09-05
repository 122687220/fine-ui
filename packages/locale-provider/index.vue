<script>
import create from '../utils/create-basic'

export default create({
  name: 'LocaleProvider',
  props: {
    locale: {
      type: String,
      default: 'zh_CN'
    }
  },
  provide() {
    return {
      locale: this.$props
    }
  },
  render(h) { // eslint-disable-line
    // 最终的渲染函数
    return this.$slots.default ? this.$slots.default[0] : null
  }
})
</script>
