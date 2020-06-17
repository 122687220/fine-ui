# 国际化
<!-- {.md} -->

---

<!-- {.md} -->
fine-ui 目前的默认文案是中文，如果需要使用其他语言，可以参考下面的方案。【暂时只支持中文（zh_CN）和英文（en_US）】

## ZvLocaleProvider
<!-- {.md} -->

fine-ui 提供了一个 Vue 组件 ZvLocaleProvider 用于全局配置组件国际化文案。

```html
<zv-locale-provider locale="zh_CN">
    <router-view />
</zv-locale-provider>
```