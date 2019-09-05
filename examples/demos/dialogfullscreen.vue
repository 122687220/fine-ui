<template>
  <div>
    <example-wrapper>
      <zv-button @click="dialogVisible1 = true">
        打开dialog
      </zv-button>
    </example-wrapper>
    <zv-dialog-fullscreen v-model="dialogVisible1" title="这个全面弹窗">
      <template v-slot:left>
        <div class="left-btn" @click="cancel">
          <i class="el-icon-arrow-left" />
          <!-- $t 取 消 -->
          取消
        </div>
      </template>
      <template v-slot:default>
        努力工作
      </template>
    </zv-dialog-fullscreen>
  </div>
</template>

<script>
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'DialogFullscreenDemo',
  components: { ExampleWrapper },
  data() {
    return {
      dialogVisible1: false
    }
  },
  methods: {
    cancel() {
      this.dialogVisible1 = false
    }
  }
}
</script>

<style scoped></style>
