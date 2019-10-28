<script>
import Vue from 'vue'
import create from '../utils/create-basic'
import ZvReconfirm from './reconfirm'
// 生成Message-Box对应的构造器
const ZvReconfirmConstructor = Vue.extend(ZvReconfirm)

function generateInstance(options) {
  let instance = new ZvReconfirmConstructor({
    propsData: Object.assign(options)
  }).$mount(document.createElement('div'))
  return new Promise((resolve, reject) => {
    instance.callback = function(type, instance) {
      if (type === 'submit') {
        resolve({
          type,
          instance
        })
      } else {
        reject({
          type,
          instance
        })
      }
    }
  })
}

export default create({
  install(Vue) {
    Vue.prototype.$reconfirm = (options = {}) => generateInstance(options)
  }
})
</script>
