<!--
 * @Descripttion: 刷新重载页面
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-11-12 08:40:40
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-11-12 08:50:15
 -->
<template>
  <div>
    <el-button type="warning" @click="handleReload1">刷新页面1</el-button>
    - window.location.reload()
    <br>
    <el-button type="warning" @click="handleReload2">刷新页面2</el-button>
    - this.$router.go(0)
    <br>
    <el-button type="warning" @click="handleReload3">刷新页面3</el-button>
    - beforeRouteEnter() 组件内的守卫
    <br>
    <el-button type="warning" @click="handleReload4">刷新页面4</el-button>
    - inject && provide
    <br>
  </div>
</template>
<script>
export default {
  name: 'ReloadPage',
  inject: ['reload', 'test'],
  methods: {
    handleReload1() {
    // 页面空白，一闪
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    // 页面空白，一闪
    handleReload2() {
      setTimeout(() => {
        this.$router.go(0);
      }, 1000);
    },
    // 路由迅速变化
    handleReload3() {
      this.$router.push('middlepage');
    },
    handleReload4() {
      console.log(this.test);
      setTimeout(() => {
        this.reload();
      }, 1000);
    },
  },
};
</script>
