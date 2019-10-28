<!--
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 17:27:04
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-28 19:06:49
 -->
<template>
  <div id="layout">
    <nav>
      <side-bar></side-bar>
    </nav>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import SideBar from './SideBar/index.vue';
import NavBar from './NavBar/index.vue';

export default {
  name: 'Layout',
  components: { SideBar, NavBar },
};
</script>
<style lang="scss" scoped>
  #layout {

  }
</style>
