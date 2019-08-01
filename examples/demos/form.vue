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

<script>
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'FormDemo',
  components: { ExampleWrapper },
  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs['numberValidateForm'].$children[0].validateField(
            'checkPass'
          )
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].$children[0].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].$children[0].resetFields()
    }
  }
}
</script>

<style scoped></style>
