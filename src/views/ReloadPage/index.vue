<!--
 * @Descripttion: 刷新重载页面
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-11-12 08:40:40
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-11-13 19:26:19
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
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'ReloadPage',
  inject: ['reload', 'test'],
  data() {
    return {
      value: '',
      options1: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
    };
  },
  created() {
      console.log('加载数据');
      this.getSelectData(); // 模拟接口请求数据
  },
  methods: {
    // TODO: 异步加载数据select没有拿到数据
    getSelectData() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.options1 = this.options;
          });
      }, 5000);
    },
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
