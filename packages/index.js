/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Alert from './alert'
import Button from './button'
import Cascader from './cascader'
import Check from './check'
import Col from './col'
import Dialog from './dialog'
import DialogFullscreen from './dialog-fullscreen'
import DialogMiddle from './dialog-middle'
import Display from './display'
import Dropdown from './dropdown'
import DymanicForm from './dymanic-form'
import Form from './form'
import FormItem from './form-item'
import Input from './input'
import Link from './link'
import LocaleProvider from './locale-provider'
import Pagination from './pagination'
import Progress from './progress'
import Reconfirm from './reconfirm'
import Row from './row'
import Scroll from './scroll'
import Search from './search'
import Select from './select'
import SelectLabel from './select-label'
import SelectTime from './select-time'
import SubTitle from './sub-title'
import Svg from './svg'
import Table from './table'
import TableFooter from './table-footer'
import TableOperate from './table-operate'
import Tabs from './tabs'
import Tag from './tag'
import Title from './title'
import Upload from './upload'
const version = '0.3.9'
const components = [
  Alert,
  Button,
  Cascader,
  Check,
  Col,
  Dialog,
  DialogFullscreen,
  DialogMiddle,
  Display,
  Dropdown,
  DymanicForm,
  Form,
  FormItem,
  Input,
  Link,
  LocaleProvider,
  Pagination,
  Progress,
  Reconfirm,
  Row,
  Scroll,
  Search,
  Select,
  SelectLabel,
  SelectTime,
  SubTitle,
  Svg,
  Table,
  TableFooter,
  TableOperate,
  Tabs,
  Tag,
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
  Col,
  Dialog,
  DialogFullscreen,
  DialogMiddle,
  Display,
  Dropdown,
  DymanicForm,
  Form,
  FormItem,
  Input,
  Link,
  LocaleProvider,
  Pagination,
  Progress,
  Reconfirm,
  Row,
  Scroll,
  Search,
  Select,
  SelectLabel,
  SelectTime,
  SubTitle,
  Svg,
  Table,
  TableFooter,
  TableOperate,
  Tabs,
  Tag,
  Title,
  Upload
}
export default {
  install,
  version
}
