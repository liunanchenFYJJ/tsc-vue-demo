<!--
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-03-11 10:40:45
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-11 14:10:20
 -->
<template>
  <div>
    跨域测试<br>
    大数据表格<br>
    <div ref="container" class="container" @scroll="handleScroll">
      <div ref="ul" class="ul" :style="{marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px`}">
        <div v-for="(item, index) in list" :key="index">{{item.name}}</div>
      </div>
    </div>
    <el-table
      :data="list"
      height="480"
      border
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
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  components: {
  },
  data() {
    return {
      tableData: [],
      list: [],
      items: [],
      // SINGLELINE: 20,
      view_heigth: 200,
      marginTop: 0,
      marginBottom: 0,
      lastScrollTop: null,
      distance: 40,
      selectWrap: null,
    };
  },
  mounted() {
    // console.log(performance.now());
    this.getData();
    // this.handleScroll();
    // this.setTableData();
    this.selectWrap = this.$el.querySelector('.el-table__body-wrapper');
    this.selectWrap.addEventListener('scroll', this.handleScroll2);
  },
  computed: {
    SINGLELINE() {
      return this.$el.querySelectorAll('.el-table__row')[0].offsetHeight;
    },
  },
  methods: {
    handleScroll2() {
      // let container = this.$refs['container'];
      // 滚动的高度
      let _scrollTop = this.selectWrap.scrollTop;

      let _containerHeight = this.selectWrap.offsetHeight;
      let showLine = Math.ceil(_containerHeight / this.SINGLELINE); // 展示的行数
      let _above = showLine * 2; // 已经过了的部分
      let _below = showLine; // 预留部分
      let _max = showLine * this.SINGLELINE;
      // let innerContainer = this.$refs['ul'];
      // 2:1:1 的比例
      // if (_scrollTop > (showLine + _above) * this.SINGLELINE) {
      //   this.list = this.tableData.slice(10, showLine * 4);
      //   // console.log(this.list)
      //   this.marginTop = this.SINGLELINE * 10;
      // } else {
      //   this.list = this.tableData.slice(0, showLine * 4);
      //   // console.log(this.list)
      // }

      if (this.lastScrollTop === null || Math.abs(_scrollTop - this.lastScrollTop) > _max) {
        this.lastScrollTop = _scrollTop;
      } else {
        return;
      }

      let _from = parseInt(_scrollTop / this.SINGLELINE) - _above;
      if (_from < 0) {
        _from = 0;
      }
      let _to = _from + _above + _below + showLine;
      if (_to > this.tableData.length) {
        _to = this.tableData.length;
      }
      console.log(_from, _to)
      this.from = _from;
      this.to = _to;


      let table__body = this.$el.querySelector('.el-table__body');

      // console.log(table__body.style)
      table__body.style.marginTop = `${_from * this.SINGLELINE}px`;
      table__body.style.marginBottom = `${(this.tableData.length - _to) * this.SINGLELINE}px`;

      // console.log(table__body)

      this.setTableData(_from, _to);
    },
    handleScroll() {
      let container = this.$refs['container'];
      // 滚动的高度
      let _scrollTop = container.scrollTop;
      let _height = this.$el.querySelectorAll('div.ul')[0].offsetHeight;
      console.log(_height);

      let _containerHeight = container.offsetHeight;
      let showLine = Math.ceil(_containerHeight / this.SINGLELINE); // 展示的行数
      let _above = showLine * 2; // 已经过了的部分
      let _below = showLine; // 预留部分
      let _max = showLine * this.SINGLELINE;
      // let innerContainer = this.$refs['ul'];
      // 2:1:1 的比例
      // if (_scrollTop > (showLine + _above) * this.SINGLELINE) {
      //   this.list = this.tableData.slice(10, showLine * 4);
      //   // console.log(this.list)
      //   this.marginTop = this.SINGLELINE * 10;
      // } else {
      //   this.list = this.tableData.slice(0, showLine * 4);
      //   // console.log(this.list)
      // }

      if (this.lastScrollTop === null || Math.abs(_scrollTop - this.lastScrollTop) > _max) {
        this.lastScrollTop = _scrollTop;
      } else {
        return;
      }

      let _from = parseInt(_scrollTop / this.SINGLELINE) - _above;
      if (_from < 0) {
        _from = 0;
      }
      let _to = _from + _above + _below + showLine;
      if (_to > this.tableData.length) {
        _to = this.tableData.length;
      }
      console.log(_from, _to)
      this.from = _from;
      this.to = _to;

      this.marginTop = _from * this.SINGLELINE;
      this.marginBottom = (this.tableData.length - _to) * this.SINGLELINE;

      this.setTableData(_from, _to);
    },
    setTableData(from, to) {
      console.log('change')
      // console.log(from, to)
      this.list = this.tableData.slice(from, to);
    },
    getData() {
      console.log(performance.now());
      for (let i = 0; i < 20000; i++) {
        this.tableData.push({
          date: '2016-05-03',
          name: `王小虎${i}`,
          address: '上海市普陀区金沙江路 1518 弄',
        });
        // this.items.push({
        //   id: i,
        // });
      }

      this.list = this.tableData; // 初始化

      console.log(performance.now());

      // $.ajax({
      //   type: 'GET',
      //   url: './crossOrigin.json',
      //   dataType: 'json',
      // }).then((res) => {
      //   console.log(res);
      //   $('#name').html(`请求数据成功！${res.name}-${res.age}`);
      // })
    },
  },
};
</script>
<style lang="scss" less>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
//滚动条的滑块
::-webkit-scrollbar-thumb {
  background-color: #eb4d0f;
  border-radius: 3px;
}

.container {
  width: 210px;
  height: 200px;
  position: relative;
  overflow: auto;
  .ul {
    width: 100%;
    border: none;
    /* position: absolute;
    background: chartreuse;
    left: 0;
    overflow: hidden; */
    & > div {
      height: 20px;
    }
  }
}
</style>
