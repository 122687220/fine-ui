/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Alert from './alert'
import Button from './button'
import Cascader from './cascader'
import Check from './check'
import Dialog from './dialog'
import DialogFullscreen from './dialog-fullscreen'
import DialogMiddle from './dialog-middle'
import Dropdown from './dropdown'
import Form from './form'
import FormItem from './form-item'
import Input from './input'
import Link from './link'
import Pagination from './pagination'
import Progress from './progress'
import Scroll from './scroll'
import Search from './search'
import Select from './select'
import SelectLabel from './select-label'
import SelectTime from './select-time'
import SubTitle from './sub-title'
import Svg from './svg'
import Table from './table'
import Tabs from './tabs'
import Title from './title'
import Upload from './upload'
const version = '0.0.8'
const components = [
  Alert,
  Button,
  Cascader,
  Check,
  Dialog,
  DialogFullscreen,
  DialogMiddle,
  Dropdown,
  Form,
  FormItem,
  Input,
  Link,
  Pagination,
  Progress,
  Scroll,
  Search,
  Select,
  SelectLabel,
  SelectTime,
  SubTitle,
  Svg,
  Table,
  Tabs,
  Title,
  Upload
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
  DialogFullscreen,
  DialogMiddle,
  Dropdown,
  Form,
  FormItem,
  Input,
  Link,
  Pagination,
  Progress,
  Scroll,
  Search,
  Select,
  SelectLabel,
  SelectTime,
  SubTitle,
  Svg,
  Table,
  Tabs,
  Title,
  Upload
}
export default {
  install,
  version
}
