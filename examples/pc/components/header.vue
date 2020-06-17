<template>
  <header
    class="page-header"
    :style="
      $route.name === 'index.js'
        ? 'box-shadow:none'
        : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'
    "
  >
    <div class="header-container">
      <a href="#" target="__blank">
        <img src="../assets/image/logo.png" class="header-container__logo" alt="logo" />
        <span class="name">fine-ui</span>
      </a>
      <div class="header-right">
        <a href="https://github.com/122687220/fine-ui/tree/master" target="__blank">
          <img
            src="https://b.yzcdn.cn/vant/logo/github.svg"
            class="header-container__logo"
            alt="github"
          />
        </a>
        <span>
          {{ version }}
        </span>
      </div>
    </div>
  </header>
</template>
<script>
const version = require('../../../package.json').version
export default {
  data() {
    return {
      version
    }
  }
}
</script>
<style type="text/scss" lang="scss">
@import '../assets/scss/index';
.page-header {
  background-color: #001938;
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  transition: all 0.3s;
  z-index: 100;

  .header-container {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .header-right {
      display: flex;
      color: white;
      align-items: center;

      span {
        padding: 4px 16px;
        border: 1px solid #fff;
        border-radius: 40px;
      }

      a {
        transition: all 0.3s ease-in-out;
        margin-right: 16px;
      }

      a:hover {
        transform: scale(1.3);
      }
    }

    &__logo {
      width: 24px;
      margin-right: 12px;
    }

    a {
      display: flex;
      align-items: center;
      height: 60px;
    }
    .name {
      color: #fff;
      font-size: 20px;
      margin-left: 5px;
    }
    .icon {
      width: 100px;
    }
  }
}
</style>
