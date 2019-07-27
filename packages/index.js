/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Alert from './alert'
import Button from './button'
import Form from './form'
import FormItem from './form-item'
import Pagination from './pagination'
import Progress from './progress'
import Search from './search'
import Svg from './svg'
import TabPane from './tab-pane'
import Tabs from './tabs'
const version = '0.0.1'
const components = [
  Alert,
  Button,
  Form,
  FormItem,
  Pagination,
  Progress,
  Search,
  Svg,
  TabPane,
  Tabs
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
  Alert,
  Button,
  Form,
  FormItem,
  Pagination,
  Progress,
  Search,
  Svg,
  TabPane,
  Tabs
}
export default {
  install,
  version
}
