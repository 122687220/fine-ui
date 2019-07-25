# 快速上手

<!-- {.md} -->

---

<!-- {.md} -->

## 安装

<!-- {.md} -->

```
将npm源切换成 http://registry.lhanyun.com/
(
  安装nrm（npm管理工具）
  0. npm i nrm -g (全局安装)
  1. nrm add xxx http://registry.lhanyun.com/  (添加npm源，xxx自己命名).
  2. nrm use xxx (切换npm源)
)
npm install ZvUI-pc --save
```

<!-- {.md} -->

## 配置依赖

<!-- {.md} -->

```
import {
  Button,
  NavBar,
  Cell,
  CellGroup,
  Field,
  Tabbar,
  Tab,
  Tabs,
  TabbarItem,
  Uploader,
  Icon,
  ImagePreview,
  Search,
  Switch,
  List,
  PullRefresh,
  DatetimePicker,
  Popup,
  Picker,
  ActionSheet,
  NoticeBar,
  Dialog,
  Toast,
  Lazyload,
  Row,
  Col
} from 'vant'

Vue.use(Button)
  .use(NavBar)
  .use(Cell)
  .use(CellGroup)
  .use(Field)
  .use(Tabbar)
  .use(Tab)
  .use(Tabs)
  .use(TabbarItem)
  .use(Uploader)
  .use(Icon)
  .use(ImagePreview)
  .use(Search)
  .use(List)
  .use(PullRefresh)
  .use(Popup)
  .use(Picker)
  .use(Toast)
  .use(ActionSheet)
  .use(NoticeBar)
  .use(Dialog)
  .use(Switch)
  .use(DatetimePicker)
  .use(Lazyload)
  .use(Row)
  .use(Col)
```

<!-- {.md} -->

## 全局组件使用

<!-- {.md} -->

```js
import ZvUIPC from 'zv-ui_pc' // 引入组件库
```

<!-- {.md} -->

引入<!-- {.md} -->样式

```js
import 'zv-ui/lib/theme-chalk/index.css' 
```

最后，全局使用组件库<!-- {.md} -->

```js
Vue.use(ZvUIPC)
```

<!-- {.md} -->

## 单个组件按需使用

<!-- {.md} -->

可以局部注册所需的组件，适用于与其他框架组合使用的场景

<!-- {.md} -->

```js
import { ZvButton } from 'ZvUIPC'

Vue.use(ZvButton)
```

<!-- {.md} -->

在模板中，用<!-- {.md} --> `<zv-button></zv-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <zv-button>这是一个基础列表组件</zv-button>
  </div>
</template>
```

<!-- {.md} -->
