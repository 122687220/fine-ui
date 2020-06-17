<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container">
      <zv-scroll class="nav">
        <sideNav />
      </zv-scroll>
      <zv-locale-provider :locale="locale">
        <zv-scroll class="view">
          <router-view />
        </zv-scroll>
      </zv-locale-provider>
    </div>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import sideNav from './components/side-nav.vue'
import router from './router'

export default {
  name: 'app',
  watch: {
    $route(to) {
      const list = ['introduce', 'start', 'logs', 'contribute', 'site-index']
      this.showNav = list.indexOf(to.name) === -1
    }
  },
  mounted() {
    if ('onhashchange' in window) {
      window.onhashchange = () => {
        let name = window.location.hash.substring(2)
        router.push({ name })
      }
    }
  },
  data() {
    return {
      locale: 'zh_CN'
    }
  },
  components: {
    mainHeader,
    sideNav
  }
}
</script>

<style lang="scss">
@import './assets/scss/index';

.container {
  background-color: #f7f8fa;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  display: flex;
  .nav {
    width: 214px;
    height: calc(100vh - 60px);
  }
  .view {
    flex: 1;
    margin: 24px;
    height: calc(100vh - 84px);
    box-sizing: border-box;
  }
}

.container:after {
  content: '';
  clear: both;
  display: block;
}
.mobile-toggle-wrap {
  position: fixed;
  right: 70px;
  top: 18px;
  z-index: 999;
  display: flex;
  align-items: center;
  color: #4fc08d;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border: 1px solid #4fc08d;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 14px;
    opacity: 0.7;
  }
}
</style>
