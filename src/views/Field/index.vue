<template>
  <div>
    <el-button>新增</el-button>
    <div class="outer">
      <div class="row">
        <span :style="{ width: `${time_unit_length}px` }" v-for="(item, index) in timeList" :key="index">{{item}}</span>
      </div>
      <div class="col">
        <span v-for="(item, index) in fieldList" :key="index">{{item}}</span>
      </div>
      <div class="inner">
        <div class="sub-row" v-for="(item, index) in fieldList" :key="index"></div>
        <div class="test1" 
          :style="{
            top: `${(test_time1.fieldNo) * row_height}px`,
            left: `${test_time1.startTime - 800}px`,
            width: `${test_time1.timeLength}px`}"
        >测试使用的场地1</div>
        <div class="test2"
          :style="{
            top: `${(test_time2.fieldNo) * row_height}px`,
            left: `${test_time2.startTime - 800}px`, // TODO: 处理时间的阶段
            width: `${test_time2.timeLength}px`}"
        >测试使用的场地2</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Field',
  data() {
    return {
      timeList: ['08:00~10:00', '10:00~12:00', '12:00~14:00'],
      fieldList: ['1号场地', '2号场地'],
      time_unit_length: 120, // 常量 预设 1px/min
      row_height: 60,
      test_time1: {
        fieldNo: 0, // TODO: 场地的下标 获取的
        startTime: '09:00',
        timeLength: 120, // 时长
        endTime: '10:31',
      },
      test_time2: {
        fieldNo: 1,
        startTime: '10:40',
        timeLength: 120, // 时长
        endTime: '10:31',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
  .outer {
    width: 100%;
    height: 500px;
    background: lightblue;
    padding: 60px 0 0 60px;
    position: relative;
    .row {
      position: absolute;
      top: 0;
      left: 60px;
      height: 60px;
      span {
        display: inline-block;
        height: 60px;
        background: lightslategrey;
        line-height: 60px;
        text-align: center;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          height: 180px; // TODO: 动态获取
          border-right: 1px solid #000;
          z-index: 100;
        }
      }
    }
    .col {
      position: absolute;
      top: 60px;
      left: 0;
      width: 60px;
      span {
        display: block;
        width: 100%;
        height: 60px;
        background: lightslategray;
        line-height: 60px;
        // border-bottom: 1px solid #000;

        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 420px; // TODO: 动态获取
          border-bottom: 1px solid #000;
          z-index: 100;
        }
      }
    }
    .inner {
      width: 100%;
      height: 500px;
      background: lightcoral;
      position: relative;
      .sub-row {
        width: 100%;
        height: 60px;
        background: lightslategray;
        line-height: 60px;
      }
      .test1 {
        // width: 140px;
        height: 40px;
        margin: 10px 0;
        background: #000;
        border: 1px solid #000;
        border-radius: 10px;
        position: absolute;
        // left: 110px;
        opacity: 0.5;
      }
      .test2 {
        // width: 140px; // TODO: 根据时间的选择来确定 60 90 120等
        height: 40px;
        margin: 10px 0;
        background: #000;
        border: 1px solid #000;
        border-radius: 10px;
        position: absolute;
        // left: 100px; // TODO: 计算获得
        opacity: 0.5;
      }
    }
  }
</style>
