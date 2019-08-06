/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Svg from './svg'
const version = '0.0.7'
const components = [
  Svg
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Svg
}
export default {
  install,
  version
}
