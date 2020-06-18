<template>
  <div class="side-nav">
    <div v-for="title in Object.keys(data)" class="group-container" :key="title">
      <p class="side-nav-title">{{ title }}</p>
      <div class="side-nav-items" v-for="nav in data[title]" :key="nav.name">
        <template v-if="nav.desc">
          <router-link
            :class="$route.name === nav.name ? 'active' : ''"
            v-if="nav.name"
            :to="{ name: nav.name }"
            >{{ nav.desc }}</router-link
          >
          <p v-else class="side-nav-group">{{ nav.desc }}</p>
          <div v-for="item in nav.items" :key="item.name">
            <router-link
              :to="{ name: item.name }"
              :class="$route.name === item.name ? 'active' : ''"
              class="slid-nav-component"
            >
              <span class="en-name">{{ item.desc }}</span>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import navConf from '@/nav.config.json'
export default {
  data() {
    return {
      data: navConf
    }
  }
}
</script>
<style lang="scss">
.side-nav {
  display: inline-block;
  box-sizing: border-box;
  padding: 16px 0;
  color: #3f536e;
  background-color: #fff;
  z-index: 99;
  .side-nav-title {
    padding: 0 24px 8px;
    color: #455a64;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.8;
  }
  .side-nav-items {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
    &:hover > a {
      color: #4fc08d;
    }

    a {
      display: block;
      position: relative;
      padding: 10px 0 10px 24px;
      color: #455a64;
      font-weight: normal;
      line-height: 1.5;
      cursor: pointer;
    }
    .side-nav-group {
      display: block;
      position: relative;
      padding: 10px 0 10px 24px;
      color: #455a64;
      font-weight: bold;
      font-size: 16px;
    }
    .slid-nav-component {
      display: block;
      position: relative;
      padding: 10px 0 10px 24px;
      color: #616367;
      font-size: 14px;

      &:hover {
        color: #4fc08d;
      }
    }
    .active {
      color: #4fc08d;
      font-weight: bold;
    }
  }
}
</style>
