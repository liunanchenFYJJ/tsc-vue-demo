<!--
 * @Descripttion: 左侧导航 TODO: 路由多次点击报错 多级路由配置
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
      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">错误页面</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="404">404</el-menu-item>
          <el-menu-item index="401">401</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/clipboard">
        <i class="el-icon-menu"></i>
        <span slot="title">剪切板</span>
      </el-menu-item>
      <el-menu-item index="/guide">
        <i class="el-icon-setting"></i>
        <span slot="title">使用指引</span>
      </el-menu-item>
      <el-menu-item index="/i18n">
        <i class="el-icon-setting"></i>
        <span slot="title">国际化</span>
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
