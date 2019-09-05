<template>
  <div>
    <example-wrapper>
      <zv-select v-model="value" :options="options" placeholder="请选择" row />
    </example-wrapper>

    <example-wrapper>
      <zv-select clearable v-model="value1" type="time" placeholder="请选择" />
    </example-wrapper>
  </div>
</template>

<script>
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'SelectDemo',
  components: { ExampleWrapper },
  data() {
    return {
      options: [
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
      ],
      value: '',
      value1: ''
    }
  }
}
</script>
