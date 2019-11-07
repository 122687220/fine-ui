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
npm install @zvalley/zv-ui__pc --save
```

<!-- {.md} -->

## 配置依赖

<!-- {.md} -->

```
// element-variables.scss 文件
$base-color: #7cb342;
$warning-color: #e53935;
/* 改变主题色变量 */
$--color-primary: $base-color;

/* 改变warning变量 */
$--color-warning: $warning-color;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import "~element-ui/packages/theme-chalk/src/index";

import Vue from 'vue'
import ElementUI from 'element-ui'
/**
 * @date 2019/4/1
 * @author 肖景
 * @description 修改element-ui中的主题颜色
 */
import './element-variables.scss'

Vue.use(ElementUI, {
  size: 'medium' // set element-ui default size
})

```

<!-- {.md} -->

## 全局组件使用

<!-- {.md} -->

```js
import ZvUI from 'zv-ui__pc' // 引入组件库
```

<!-- {.md} -->

引入<!-- {.md} -->样式

```js
import 'zv-ui__pc/lib/theme-chalk/index.css' 
```

最后，全局使用组件库<!-- {.md} -->

```js
Vue.use(ZvUI)
```

<!-- {.md} -->

## 单个组件按需使用

<!-- {.md} -->

可以局部注册所需的组件，适用于与其他框架组合使用的场景

<!-- {.md} -->

```js
import { ZvButton } from 'ZvUI'

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
