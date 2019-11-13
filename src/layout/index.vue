<!--
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 17:27:04
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-11-13 18:34:47
 -->
<template>
  <div id="layout">
    <div id="left" :class="toggleClass">
      <side-bar></side-bar>
    </div>
    <div id="right">
      <div id="header">
        <nav-bar></nav-bar>
        <tags-view></tags-view>
      </div>
      <div id="content">
        <keep-alive>
          <router-view v-if="isRouterAlive"></router-view>
        </keep-alive>
      </div>
      <!-- <div id="footer">footer</div> -->
    </div>
  </div>
</template>
<script>
import SideBar from './SideBar/index.vue';
import NavBar from './NavBar/index.vue';
import TagsView from './TagsView/index.vue';

export default {
  name: 'Layout',
  components: { SideBar, NavBar, TagsView },
  // provide 高级属性
  provide() {
    return {
      reload: this.reload,
      test: 'test',
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  computed: {
    toggleClass() {
      return {
        hideSideBar: this.$store.state.isSideBarOpen,
      };
    },
  },
  methods: {
    // 全局引用的搜索方法
    reload() {
      this.isRouterAlive = false;
      // 刷新的时候等页面加载完就变成true
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  #layout {
    display: flex;
    height: 100%;
    #left {
      height: 100px;
    }
    #right {
      height: 100%;
      width: 100%;
      #header {
        height: 84px;
      }
      #content {
        height: calc(100% - 84px);
        padding: 1em;
      }
      #footer {}
    }
  }
  .hideSideBar {
    width: 64px;
  }
</style>
