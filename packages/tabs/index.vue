<template>
  <div class="zv-tabs">
    <el-tabs v-model="currentValue" v-bind="$attrs" v-on="$listeners">
      <el-tab-pane
        :label="item.label"
        :name="item.name"
        v-for="(item, index) in tabPane"
        :key="index"
        v-bind="item"
      >
        <div style="width: 100%">
          <slot :name="item.name" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ZvModel from '../mixins/zv-model'
import create from '../utils/create-basic'
export default create({
  name: 'Tabs',
  mixins: [ZvModel],
  props: {
    tabPane: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>
