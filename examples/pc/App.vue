<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container">
      <sideNav class="nav"></sideNav>
      <zv-locale-provider :locale="locale">
        <router-view class="view"></router-view>
      </zv-locale-provider>
    </div>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import mainFooter from './components/footer.vue'
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
      locale: 'en_US'
    }
  },
  components: {
    mainHeader,
    sideNav,
    mainFooter
  }
}
</script>

<style lang="scss">
@import './assets/scss/index';

.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(100% - 540px);
    padding: 32px 48px 48px;
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
  color: #628cf5;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border: 1px solid #628cf5;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 14px;
    opacity: 0.7;
  }
}
</style>
