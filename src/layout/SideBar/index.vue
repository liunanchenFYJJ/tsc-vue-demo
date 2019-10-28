<!--
 * @Descripttion:
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 17:46:31
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-28 18:47:11
 -->
<template>
  <div class="sidebar">
    <el-menu
      :default-active="'1'"
      :collapse="isCollapse"
      background-color="#303133"
      text-color="#fff">
      <el-menu-item index="1">DashBoard</el-menu-item>
      <el-submenu index="2">
        <el-menu-item index="">2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>
<style lang="scss" scoped>
  .sidebar {
    width: 210px;
  }
</style>
