<template>
  <div class="box">
    <div class="top">
      <zv-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <zv-button>上左</zv-button>
      </zv-tooltip>
      <zv-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
        <zv-button>上边</zv-button>
      </zv-tooltip>
      <zv-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
        <zv-button>上右</zv-button>
      </zv-tooltip>
    </div>
    <div class="left">
      <zv-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
        <zv-button>左上</zv-button>
      </zv-tooltip>
      <zv-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <zv-button>左边</zv-button>
      </zv-tooltip>
      <zv-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <zv-button>左下</zv-button>
      </zv-tooltip>
    </div>

    <div class="right">
      <zv-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
        <zv-button>右上</zv-button>
      </zv-tooltip>
      <zv-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <zv-button>右边</zv-button>
      </zv-tooltip>
      <zv-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <zv-button>右下</zv-button>
      </zv-tooltip>
    </div>
    <div class="bottom">
      <zv-tooltip
        class="item"
        effect="dark"
        content="Bottom Left 提示文字"
        placement="bottom-start"
      >
        <zv-button>下左</zv-button>
      </zv-tooltip>
      <zv-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <zv-button>下边</zv-button>
      </zv-tooltip>
      <zv-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <zv-button>下右</zv-button>
      </zv-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TooltipDemo'
}
</script>

<style lang="scss">
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .zv-tooltip__popper,
  .right .zv-tooltip__popper {
    padding: 8px 10px;
  }
}
</style>
