<template>
  <div>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        placeholder="请选择"
        component-name="Select"
        title="机型"
        row
      />
    </example-wrapper>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        placeholder="请选择"
        component-name="Select"
        title="机型"
      />
    </example-wrapper>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        placeholder="请选择"
        component-name="Select"
        width-type="big"
        title="机型"
      />
    </example-wrapper>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        placeholder="请选择"
        component-name="Select"
        width-type="super"
        title="机型"
      />
    </example-wrapper>
    <example-wrapper>
      <zv-select-label
        v-model="value"
        :options="options"
        component-name="SelectTime"
        time-type="monthrange"
        placeholder="请选择"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        clearable
        title="机型"
      />
    </example-wrapper>
  </div>
</template>

<script>
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'SelectLabelDemo',
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
      value1: '',
      value2: ''
    }
  }
}
</script>
