<!--
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 18:48:21
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-29 10:25:27
 -->
<template>
  <div id="navbar">
    <div class="icon">
      <i :class="iconClass" @click="toggleSideBar"></i>
    </div>
    navbar
  </div>
</template>
<script>
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
  },
};
</script>
<style lang="scss" scoped>
  #navbar {
    height: 50px;
    background: lightblue;
    display: flex;
    .icon {
      width: 20px;
      padding: 0 15px;
      line-height: 50px;
      .el-icon-caret-right, .el-icon-caret-left {
        width: 20px;
        height: 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
