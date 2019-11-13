# 定制主题
<!-- {.md} -->

---

<!-- {.md} -->
ZVUI 的 theme-chalk 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 ZVUI 的样式变量。新建一个样式文件，例如 zv-ui-variables.scss，写入以下内容：

```js
/* 改变主题色变量 */
$baseColor: red;

@import "~@zvalley/zv-ui/packages/theme-chalk/src/index";
```

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 ZVUI 编译好的 CSS 文件）：

```js
import Vue from 'vue'
import ZvUI from '@zvalley/zv-ui'
import './zv-ui-variables.scss'

Vue.use(ZvUI)
```

如果是以按需引入的方式使用组件库的组件，在 babel.config.js 中将style属性设置为false

```js
// babel.config.js

module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      {
        libraryName: '@zvalley/zv-ui',
        libraryDirectory: 'packages',
        style: false
      },
      'zv-ui'
    ]
  ]
}
```