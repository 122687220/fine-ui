/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Alert from './alert'
import Button from './button'
import Cascader from './cascader'
import Check from './check'
import Form from './form'
import FormItem from './form-item'
import Link from './link'
import Pagination from './pagination'
import Progress from './progress'
import Search from './search'
import Svg from './svg'
import Tabs from './tabs'
const version = '0.0.1'
const components = [
  Alert,
  Button,
  Cascader,
  Check,
  Form,
  FormItem,
  Link,
  Pagination,
  Progress,
  Search,
  Svg,
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
  Cascader,
  Check,
  Form,
  FormItem,
  Link,
  Pagination,
  Progress,
  Search,
  Svg,
  Tabs
}
export default {
  install,
  version
}
