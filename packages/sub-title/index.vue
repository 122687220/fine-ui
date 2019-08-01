<template>
  <div class="zv-sub-title">
    <span>
      <slot>二级标题</slot>
    </span>
  </div>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'SubTitle'
})
</script>
