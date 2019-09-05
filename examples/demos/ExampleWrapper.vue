<template>
  <div class="example__wrapper">
    <span>{{ title }}</span>

    <div class="example__slot-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleWrapper',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.example__wrapper {
  padding-top: 10px;
  span {
    display: block;
    padding-left: 10px;
    font-size: 14px;
    color: #333;
  }
  .example__slot-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    /*padding: 5px;*/
    padding: 10px;
  }
}
</style>
