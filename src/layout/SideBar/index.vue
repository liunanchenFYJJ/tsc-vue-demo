<!--
 * @Descripttion:
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 17:46:31
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-30 19:18:44
 -->
<template>
  <div class="sidebar">
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#303133"
      text-color="#fff"
      :router="true">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">dash</span>
      </el-menu-item>
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
      <el-menu-item index="/clipboard">
        <i class="el-icon-menu"></i>
        <span slot="title">剪切板</span>
      </el-menu-item>
      <el-menu-item index="/guide">
        <i class="el-icon-setting"></i>
        <span slot="title">使用指引</span>
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
