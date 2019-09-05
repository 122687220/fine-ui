# Form 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

表单组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<form-demo></form-demo>

::: demo

```html
<template>
  <div style="margin-left: 30px;">
    <zv-form :model="ruleForm2" ref="numberValidateForm">
      <zv-form-item prop="pass" :rules="rules2.pass">
        <zv-input
          type="password"
          v-model="ruleForm2.pass"
          autocomplete="off"
          labelTop
          label="登录密码"
          placeholder="请输入您的登录密码"
        >
        </zv-input>
      </zv-form-item>
      <zv-form-item prop="checkPass" :rules="rules2.checkPass">
        <zv-input
          type="password"
          v-model="ruleForm2.checkPass"
          autocomplete="off"
          label="再次输入登录密码"
          placeholder="请再次输入您的登录密码"
        >
        </zv-input>
      </zv-form-item>
      <zv-form-item prop="age" :rules="rules2.age">
        <zv-input
          v-model.number="ruleForm2.age"
          label="请输入年龄"
          labelTop
          placeholder="请输入您的年龄"
        >
        </zv-input>
      </zv-form-item>
    </zv-form>
    <example-wrapper>
      <zv-button
        type="primary"
        @click="submitForm('numberValidateForm')"
        fun-id="exampleForm_test"
      >
        操作按钮
      </zv-button>
      <zv-button
        @click="resetForm('numberValidateForm')"
        fun-id="exampleForm_test"
      >
        重置
      </zv-button>
    </example-wrapper>
    <zv-alert>
      <span>提示内容</span>
      <template v-slot:right>
        <zv-button type="warning" :disabled="true" fun-id="exampleForm_test">
          操作按钮
        </zv-button>
      </template>
    </zv-alert>
  </div>
</template>
```
:::

