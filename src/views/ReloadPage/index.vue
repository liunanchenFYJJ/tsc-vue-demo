<template>
  <div>
    <!-- 示例表格 -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

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
  data() {
    return {
      tableData: [],
      tableData1: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
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
}
</script>
