<script>
import create from '../utils/create-basic'
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default create({
  name: 'Dropdown',
  mixins: [langMixins],
  props: {
    itemLists: {
      type: Array,
      default() {
        return []
      }
    },
    itemRender: {
      type: Function
    }
  },
  render(h) {  // eslint-disable-line
    const { $attrs, $listeners, localLocale, $slots, itemLists, itemRender } = this
    const localeLang = lang[localLocale] || {}
    let dropDownItem = null

    const $slotsDefault = $slots.default.length ? (
      <div>{$slots.default}</div>
    ) : (
      <span>{localeLang.default || '点击触发下拉框'}</span>
    )

    if (itemLists.length) {
      dropDownItem = (
        <ElDropdownMenu slot="dropdown">
          {itemLists.map((item, index) => (
            <ElDropdownItem key={index} {...{ attrs: item || {} }}>
              {itemRender ? itemRender(item) : item.name ? item.name : item}
            </ElDropdownItem>
          ))}
        </ElDropdownMenu>
      )
    }

    return (
      <ElDropdown class="zv-dropdown" {...{ attrs: $attrs, listeners: $listeners }}>
        {$slotsDefault}
        {dropDownItem}
      </ElDropdown>
    )
  }
})
</script>
