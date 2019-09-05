<template>
  <div>
    <div class="list">
      <zv-button size="large" type="primary" @click="handleClick">
        操作按钮
      </zv-button>
      <zv-button size="large" type="primary" :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button size="large" type="primary" plain>
        操作按钮
      </zv-button>
      <zv-button size="large" type="primary" plain :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="primary">
        操作按钮
      </zv-button>
      <zv-button type="primary" :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button>
        操作按钮
      </zv-button>
      <zv-button :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="primary" plain>
        操作按钮
      </zv-button>
      <zv-button type="primary" plain :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="warning">
        操作按钮
      </zv-button>
      <zv-button type="warning" :disabled="true">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="warning" icon="audit">
        操作按钮
      </zv-button>
      <zv-button type="warning" :disabled="true" icon="audit">
        操作按钮
      </zv-button>
    </div>

    <div class="list">
      <zv-button type="text">
        操作按钮
      </zv-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonDemo',
  methods: {
    handleClick(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin-bottom: 10px;
}
</style>
