<!--
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 17:27:04
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-29 10:19:51
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
        <router-view></router-view>
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
  data() {
    return {};
  },
  computed: {
    toggleClass() {
      return {
        hideSideBar: this.$store.state.isSideBarOpen,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
  #layout {
    display: flex;
    height: 100%;
    #left {
      height: 100%;
      background: lightblue;
    }
    #right {
      height: 100%;
      width: 100%;
      background: lightpink;
      #header {
        height: 84px;
        background: lightsalmon;
      }
      #content {
        height: calc(100% - 84px);
        background: lightseagreen;
      }
      #footer {

      }
    }
  }
  .hideSideBar {
    width: 64px;
  }
</style>
