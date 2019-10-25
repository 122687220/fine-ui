<template>
  <div>
    <div>行内表格</div>
    <zv-dymanic-form type="inline" v-model="value" :schema="schema" />
    <div>块状表格</div>
    <zv-dymanic-form
      ref="dymanicForm"
      type="block"
      v-model="value1"
      :schema="schema1"
      :style="{
        justifyContent: 'flex-start'
      }"
    >
      <div style="width: 100%; order: 2;">这个地方是插槽</div>
    </zv-dymanic-form>
    <div>
      <zv-button @click="submit">提交</zv-button>
      <zv-button @click="reset">重置</zv-button>
      <zv-button @click="clear">清空</zv-button>
    </div>
  </div>
</template>

<script>
const options = [
  {
    value: '选项1',
    label: '黄金糕'
  },
  {
    value: '选项2',
    label: '双皮奶'
  },
  {
    value: '选项3',
    label: '蚵仔煎'
  },
  {
    value: '选项4',
    label: '龙须面'
  },
  {
    value: '选项5',
    label: '北京烤鸭'
  }
]
export default {
  name: 'DymanicFormDemo',
  data() {
    return {
      value: {
        food: '选项3'
      },
      schema: {
        search: {
          componentName: 'ZvInput',
          placeholder: '请输入',
          showBorder: '',
          labelTop: '',
          widthType: 'default',
          style: {
            paddingRight: 0
          }
        },
        food: {
          componentName: 'ZvSelect',
          options,
          placeholder: '请选择'
        },
        fruit: {
          componentName: 'ZvSelect',
          options,
          placeholder: '请选择其他'
        },
        time: {
          componentName: 'ZvSelectTime',
          timeType: 'monthrange',
          placeholder: '请选择',
          rangeSeparator: '至',
          startPlaceholder: '开始月份',
          endPlaceholder: '结束月份',
          clearable: true
        },
        time2: {
          componentName: 'ZvSelectTime',
          timeType: 'daterange',
          placeholder: '请选择',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
          clearable: true
        }
      },
      value1: {},
      schema1: {
        name: {
          componentName: 'ZvInput',
          label: '登录密码',
          placeholder: '请输入您的登录密码',
          labelTop: true,
          widthType: 'default',
          required: true,
          showBorder: true,
          rules: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请再次输入密码'))
                } else {
                  callback()
                }
              },
              trigger: 'blur'
            }
          ]
        },
        url: {
          componentName: 'ZvInput',
          label: '网址',
          placeholder: '请输入您的网址',
          labelTop: true,
          widthType: 'default',
          required: true,
          showBorder: true,
          validator: [
            [
              'checkUrl',
              {
                msg: '网址格式错误'
              }
            ],
            [
              'checkRequired',
              {
                msg: '网址不能为空'
              }
            ]
          ]
        },
        length: {
          componentName: 'ZvInput',
          label: '长度',
          placeholder: '请输入长度在3到10之间',
          labelTop: true,
          widthType: 'big',
          required: true,
          showBorder: true,
          validator: [
            [
              'checkLength',
              {
                min: 3,
                max: 10,
                minMsg: '少于3个字',
                maxMsg: '多于10个字'
              }
            ],
            [
              'checkRequired',
              {
                msg: '网址不能为空'
              }
            ]
          ]
        },
        select: {
          componentName: 'ZvSelectLabel',
          options: options,
          placeholder: '请选择',
          componentType: 'Select',
          isRequired: true,
          title: '食品选择',
          validator: [
            [
              'checkUrl',
              {
                msg: '食品选择格式错误'
              }
            ],
            [
              'checkRequired',
              {
                msg: '食品选择不能为空'
              }
            ]
          ]
        },
        select1: {
          componentName: 'ZvSelectLabel',
          options: options,
          placeholder: '请选择',
          componentType: 'Select',
          isRequired: true,
          title: '机型'
        },
        select0: {
          componentName: 'ZvSelectLabel',
          options: options,
          placeholder: '请选择',
          componentType: 'Select',
          isRequired: true,
          title: '机型2'
        },
        select9: {
          componentName: 'ZvSelectLabel',
          options: options,
          placeholder: '请选择',
          componentType: 'Select',
          isRequired: true,
          title: '机型9'
        },
        email: {
          componentName: 'ZvInput',
          label: '邮箱',
          placeholder: '请输入您的邮箱',
          widthType: 'big',
          labelTop: true,
          required: true,
          showBorder: true,
          rules: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请再次输入密码'))
                } else {
                  callback()
                }
              },
              trigger: 'blur'
            }
          ]
        },
        time: {
          componentName: 'ZvSelectLabel',
          componentType: 'SelectTime',
          timeType: 'monthrange',
          placeholder: '请选择',
          rangeSeparator: '至',
          startPlaceholder: '开始月份',
          endPlaceholder: '结束月份',
          clearable: true,
          isRequired: true,
          title: '机型33'
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.value = {
        food: '选项4',
        search: 3923
      }
    }, 3000)
    setTimeout(() => {
      this.$set(this.schema1, 'select3', {
        componentName: 'ZvSelectLabel',
        options: options,
        placeholder: '请选择',
        componentType: 'Select',
        isRequired: true,
        title: '机型3',
        validator: [
          [
            'checkRequired',
            {
              msg: '机型33不能为空'
            }
          ]
        ]
      })
    }, 5000)
  },
  methods: {
    submit() {
      this.$refs['dymanicForm'].validate().then(res => {
        console.log(res)
      })
    },
    reset() {
      this.$refs['dymanicForm'].resetFields()
    },
    clear() {
      this.$refs['dymanicForm'].clearValidate()
    }
  }
}
</script>
