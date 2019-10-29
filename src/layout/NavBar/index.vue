<!--
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 18:48:21
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-29 19:18:21
 -->
<template>
  <div id="navbar">
    <div class="left">
      <div class="icon">
        <i :class="iconClass" @click="toggleSideBar"></i>
      </div>
      <!-- TODO: el-scrollbar -->
      <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      <!-- </el-scrollbar> -->
    </div>
    <div class="right">
      <i class="iconfont icon-iconfront--copy" @click="toggleFullScreen"></i>
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- <div>
          <div class="img"></div>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div> -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Dash</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import screenfull from 'screenfull';

export default {
  name: 'NavBar',
  computed: {
    iconClass() {
      return this.$store.state.isSideBarOpen ? 'el-icon-caret-right' : 'el-icon-caret-left';
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.commit('toggleSideBar');
    },
    toggleFullScreen() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning',
        });
        return false;
      }
      console.log(screenfull);
      screenfull.toggle();
      return true;
    },
  },
};
</script>
<style lang="scss" scoped>
  $height: 50px;
  #navbar {
    height: $height;
    box-shadow: 0 2px 5px #f4f4f4;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      .icon {
        width: 20px;
        padding: 0 15px;
        line-height: $height;
        .el-icon-caret-right, .el-icon-caret-left {
          width: 20px;
          height: 20px;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .el-breadcrumb {
        line-height: $height;
      }
    }
    .right {
      display: flex;
      line-height: $height;
      i {
        font-size: 1.2em;
        line-height: $height;
        &:hover {
          cursor: pointer;
        }
      }
      .el-dropdown {
        padding-right: 15px;
        line-height: $height;
        .img {
          width: 30px;
          height: 30px;
          background: url('./logo.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
</style>
