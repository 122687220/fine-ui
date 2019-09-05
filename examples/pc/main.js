// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element-variables.scss'
import './plugins'
import './assets/scss/index.scss'
import demoBlock from './components/demo-block.vue'
import ZvUI from '../../packages/index'
import './icons'

Vue.use(ZvUI)
import '../../packages/theme-chalk/lib/index.css'

// Vue.use(VueCards)
const Demos = []

function importDemos(r) {
  r.keys().forEach(key => {
    Demos.push(r(key).default)
  })
}

importDemos(require.context('@/demos', true, /\.vue$/))

Demos.map(component => Vue.component(component.name, component))

Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
