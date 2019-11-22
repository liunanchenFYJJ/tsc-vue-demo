<template>
  <div>
    剪切板
    <br>
    1. data-clipboard-target 属性
    <el-input :value="msg" id="foo">
      <el-button data-clipboard-target="#foo" slot="append" icon="el-icon-edit"></el-button>
    </el-input>
    <br>
    2. 回调事件
    <el-input :value="msg1" class="input-with-select" id="foo1">
      <el-button id="btn" data-clipboard-target="#foo1" slot="append" icon="el-icon-edit" @click="handleClip"></el-button>
    </el-input>
    <!--  -->
  </div>
</template>
<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'Clipboard',
  data() {
    return {
      msg: '我很帅!',
      msg1: '我很帅, too!',
      btn: null,
    };
  },
  mounted() {
    // this.btn = new ClipboardJS('#btn');
  },
  methods: {
    handleClip() {
      // this.$nextTick(() => {
        this.btn = new ClipboardJS('#btn');
        this.btn.on('success', (evt) => {
          this.$message.success('复制成功');
          evt.clearSelection(); // 清除选中
          // this.btn.destroy(); // 释放内存
        });
        this.btn.on('error', (evt) => {
          this.$message.error('复制失败');
        });
      // });
    },
  },
};
</script>
