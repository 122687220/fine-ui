<template>
  <div>
    <example-wrapper>
      <zv-title title="测试" sub-title="有点小帅">
        <zv-button>dfsdfdf</zv-button>
        <zv-button style="margin-left: 8px;">aaaaa</zv-button>
      </zv-title>
    </example-wrapper>
    <example-wrapper>
      <zv-title title="测试" sub-title="有点小帅">
        <template v-slot:subtitle>
          <zv-link type="primary">主要链接</zv-link>
        </template>

        <zv-button>dfsdfdf</zv-button>
        <zv-button style="margin-left: 8px;">aaaaa</zv-button>
      </zv-title>
    </example-wrapper>
  </div>
</template>

<script>
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'TitleDemo',
  components: { ExampleWrapper }
}
</script>

<style scoped></style>
