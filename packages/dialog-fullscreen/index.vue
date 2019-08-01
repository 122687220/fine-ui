<template>
  <div class="zv-dialog__fullscreen" v-if="currentValue">
    <!-- $t 选择相关的位置 -->
    <nav-bar :title="$t('components.choosePosition.title')">
      <template v-slot:left>
        <div class="left-btn" @click="cancel">
          <i class="el-icon-arrow-left" />
          <!-- $t 取 消 -->
          {{ $t('components.choosePosition.cancel') }}
        </div>
      </template>
    </nav-bar>
    <div class="zv-dialog__fullscreen-container"></div>
  </div>
</template>

<script>
import ZvModel from '../mixins/zv-model'
import create from '../utils/create-basic'
export default create({
  name: 'DialogMiddle',
  mixins: [ZvModel],
  props: {}
})
</script>

<style lang="scss" scoped>
.zv-dialog__fullscreen {
  position: fixed;
  background-color: $mainBg;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  top: 0;
  left: 0;
}
</style>
