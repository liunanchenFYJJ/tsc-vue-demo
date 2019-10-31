<!--
 * @Descripttion: guide with driver.js
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-30 10:49:12
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-31 09:12:25
 -->
<template>
  <div>
    <div>模拟页面分布引导</div>
    <!-- TODO: 重要 .prevent.stop 否则出现闪现 -->
    <!-- 阻止单击事件继续传播 -->
    <el-button @click.stop="startGuide">开始指引</el-button>
  </div>
</template>
<script>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import steps from './steps';

export default {
  name: 'Guide',
  data() {
    return {
      driver: null,
    };
  },
  mounted() {
    this.driver = new Driver({
      allowClose: false,
    });
  },
  methods: {
    startGuide() {
      // this.driver.highlight({
      //   element: '#myicon',
      //   popover: {
      //     title: 'Title for the Popover',
      //     description: 'Description for it',
      //   }
      // });
      this.driver.defineSteps(steps);
      this.driver.start();
    },
  },
};
</script>
