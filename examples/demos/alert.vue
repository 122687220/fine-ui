<template>
  <div>
    <zv-alert svg-color="red">
      <span>提示内容</span>
      <template v-slot:right>
        <zv-button type="warning" :disabled="true" fun-id="exampleForm_test">
          操作按钮
        </zv-button>
      </template>
    </zv-alert>

    <zv-alert svg-color="yellow" style="background-color: orange">
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
export default {
  name: 'AlertDemo'
}
</script>

<style lang="scss" scoped></style>
