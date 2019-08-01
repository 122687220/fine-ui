/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Alert from './alert'
import Button from './button'
import Cascader from './cascader'
import Check from './check'
import Dialog from './dialog'
import DialogMiddle from './dialog-middle'
import Dropdown from './dropdown'
import Form from './form'
import FormItem from './form-item'
import Input from './input'
import Link from './link'
import Pagination from './pagination'
import Progress from './progress'
import Search from './search'
import Select from './select'
import SelectLabel from './select-label'
import SelectTime from './select-time'
import SubTitle from './sub-title'
import Svg from './svg'
import Tabs from './tabs'
import Title from './title'
const version = '0.0.3'
const components = [
  Alert,
  Button,
  Cascader,
  Check,
  Dialog,
  DialogMiddle,
  Dropdown,
  Form,
  FormItem,
  Input,
  Link,
  Pagination,
  Progress,
  Search,
  Select,
  SelectLabel,
  SelectTime,
  SubTitle,
  Svg,
  Tabs,
  Title
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
  Dialog,
  DialogMiddle,
  Dropdown,
  Form,
  FormItem,
  Input,
  Link,
  Pagination,
  Progress,
  Search,
  Select,
  SelectLabel,
  SelectTime,
  SubTitle,
  Svg,
  Tabs,
  Title
}
export default {
  install,
  version
}
