# image 组件 

notice: 预览模式需要在element-ui 2.13.0的版本下才可以生效

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

基于element-ui的image组件进行改造的组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<image-demo></image-demo>

::: demo

```html
<template>
  <div class="demo-image__preview">
    <h4>基础用法</h4>
    <div class="blocks">
      <div class="block" v-for="fit in fits" :key="fit">
        <span class="demonstration">{{ fit }}</span>
        <zv-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
      </div>
    </div>

    <div class="mt40">
      <h4>图片预览</h4>
      <zv-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList" />
    </div>

    <h4 class="mt40">占位内容</h4>
    <div class="blocks">
      <div class="block">
        <span class="demonstration">默认</span>
        <zv-image :src="src" style="width: 100px; height: 100px" />
      </div>
      <div class="block">
        <span class="demonstration">自定义</span>
        <zv-image @load="load" :src="src" style="width: 100px; height: 100px">
          <div slot="placeholder" class="image-slot">加载中<span class="dot">...</span></div>
        </zv-image>
      </div>
      <div class="block">
        <span class="demonstration">加载失败</span>
        <zv-image style="width: 100px; height: 100px">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </zv-image>
      </div>
    </div>
  </div>
</template>
```
```js
export default {
  name: 'ImageDemo',
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      srcList: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']
    }
  },
  methods: {
    load(e) {
      console.log(e)
    }
  }
}
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| Attributes和element-ui中的image一样 |

## methods

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| methods和element-ui中的image一样 |

## slots

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| slots和element-ui中的image一样 |

