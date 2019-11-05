<template>
  <div>
    剪切板
    <br>
    <el-input :value="msg" class="input-with-select">
      <el-button id="btn" slot="append" icon="el-icon-edit" v-popover:popover2 @click="handleClip($event, msg)"></el-button>
    </el-input>
    <!--  -->
    <el-popover
      ref="popover2"
      placement="bottom"
      trigger="click"
      content="复制成功！">
    </el-popover>
  </div>
</template>
<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'Clipboard',
  data() {
    return {
      msg: '我很帅!',
    };
  },
  methods: {
    handleClip(e, msg) {
      console.log(e);
      console.log(e.target);
      let c = new ClipboardJS('#btn');
    },
  },
};
</script>