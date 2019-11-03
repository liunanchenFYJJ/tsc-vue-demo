<!--
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-28 17:35:26
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-28 18:04:50
 -->
<template>
  <div>
    {{msg}}
    <div ref="data">我是数据源</div>
    <Button type="primary" @click="changeMsg">changeMsg</Button>
  </div>
</template>
<script>
export default {
  name: 'DashBoard',
  data() {
    return {
      msg: 'before',
    };
  },
  methods: {
    changeMsg() {
      this.msg = 'before1';
      // console.log(this.$refs['data'].innerHTML);
      // console.log(this.msg);
      // this.$nextTick(() => {
        // this.$refs['data'].innerHTML = '操作了DOM';
      // });
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
    console.log(1);
  },
  created() {
    console.log('created');
    console.log(2);
    // this.$nextTick(() => {
    //   this.$refs['data'].innerHTML = '操作了DOM';
    // });
  },
  beforeMount() {
    console.log('beforeMount');
    console.log(3);
    this.$nextTick(() => {
      this.$refs['data'].innerHTML = '操作了DOM';
    }, this)
  },
  mounted() {
    // this.$refs['data'].innerHTML = '操作了DOM';
    console.log('mounted');
    console.log(4);
  },
  beforeUpdate() {
    console.log('beforeUpdate');
    console.log(this.msg);
    console.log(5);
    // this.$refs['data'].innerHTML = '操作了DOM';
    // debugger
  },
  updated() {
    console.log('updated');
    console.log(this.msg);
    console.log(6);
    // debugger
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    console.log(7);
  },
  destroyed() {
    console.log('destroyed');
    console.log(8);
  },
};
</script>
