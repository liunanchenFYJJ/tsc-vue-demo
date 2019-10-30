<!--
 * @Descripttion: guide with driver.js
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-30 10:49:12
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-30 20:08:09
 -->
<template>
  <div>
    <div>模拟页面分布引导</div>
    <el-button @click="startGuide">开始指引</el-button>
  </div>
</template>
<script>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
const driver = new Driver();
export default {
  name: 'Guide',
  data() {
    return {
      driver: null,
    };
  },
  mounted() {
    // this.driver = new Driver();
    // this.driver.highlight({
    //   element: '#myicon',
    //   popover: {
    //     title: 'Title for the Popover',
    //     description: 'Description for it',
    //   }
    // });
  },
  methods: {
    startGuide() {
      console.log(driver.highlight('#myicon'));
      driver.highlight({
        element: '#myicon',
        popover: {
          title: 'Title for the Popover',
          description: 'Description for it',
        }
      });
      // this.driver.defineSteps(steps);
      // this.driver.start();
    },
  },
};
</script>
