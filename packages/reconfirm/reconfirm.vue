<script>
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default {
  name: 'ZvReconfirm',
  mixins: [langMixins],
  props: {
    width: {
      type: String,
      default: '320px'
    },
    bodyHeight: {
      type: String,
      default: '152px'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    btnList: {
      type: Array,
      default() {
        return ['cancel', 'submit']
      }
    },
    contentRender: {
      type: Function
    }
  },
  data() {
    return {
      currentValue: true
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods: {
    submit() {
      if (this.callback) {
        this.callback('submit', this)
      }
    },
    closed() {
      if (this.callback) {
        this.callback('closed', this)
      }
    },
    closeDialog() {
      this.currentValue = false
    }
  },
  // eslint-disable-next-line
  render(h) {
    const {
      title,
      currentValue,
      width,
      bodyHeight,
      content,
      localLocale,
      btnList,
      submit,
      closed,
      $attrs,
      $listeners
    } = this
    const localeLang = lang[localLocale] || {}
    const bodyStyle = {
      height: bodyHeight
    }
    let btnArray = []

    if (btnList.includes('cancel')) {
      btnArray.push(
        <ZvButton class="zv-dialog__footerbtn" onClick={closed}>
          {localeLang.cancel || '取消'}
        </ZvButton>
      )
    }
    if (btnList.includes('submit')) {
      btnArray.push(
        <ZvButton type="primary" onClick={submit}>
          {localeLang.sure || '确定'}
        </ZvButton>
      )
    }

    return (
      <ElDialog
        class="zv-dialog"
        title={title || localeLang.title || '取消'}
        visible={currentValue}
        closeOnClickModal={false}
        width={width}
        onClosed={closed}
        {...{ attrs: $attrs, listeners: $listeners }}
      >
        <ElScrollbar style={bodyStyle} class="el-dialog__body__default">
          <div>{this.contentRender ? this.contentRender() : content}</div>
        </ElScrollbar>
        <div slot="footer" class="dialog-footer">
          {btnArray}
        </div>
      </ElDialog>
    )
  }
}
</script>
