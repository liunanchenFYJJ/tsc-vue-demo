<!--
 * @Descripttion:
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 17:46:31
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-29 10:53:01
 -->
<template>
  <div class="sidebar">
    <!-- <el-menu
      :default-active="'1'"
      :collapse="isCollapse"
      background-color="#303133"
      text-color="#fff"
      >
      <el-menu-item index="1">Dash</el-menu-item>
      <el-submenu index="2">
        <el-menu-item index="">2</el-menu-item>
      </el-submenu>
    </el-menu> -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#303133"
      text-color="#fff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.state.isSideBarOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
  .sidebar {
    width: 210px;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 210px;
      // min-height: 400px;
    }
  }
</style>
