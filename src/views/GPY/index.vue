<!--
 * @Descripttion: 高拍仪 websocket
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-11-13 16:52:03
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-11-13 19:08:19
 -->
<template>
  <div>
    <el-button type="primary" @click="sendMsg">发送websocket信息</el-button>
  </div>
</template>
<script>
export default {
  name: 'GPY',
  data() {
    return {
      websocket: null,
    }
  },
  mounted() {
    this.initSocket();
  },
  destroyed() {
    this.websocket.onclose();
  },
  methods: {
    initSocket() {
      try {
        !this.websocket && (this.websocket = new WebSocket('ws://localhost:22225'));
        this.websocket.binaryType = 'arraybuffer';
        console.log('高拍仪websocket建立成功...');
        console.log(this.websocket);
        this.websocket.onopen = this.handleOpen;
        this.websocket.onmessage = this.handleMessage;
        this.websocket.onclose = this.handleClose;
        this.websocket.onerror = this.handleError;
      } catch (error) {
        console.log('高拍仪websocket建立出错...');
        console.log(error);
      }
    },
    handleError() { // 连接失败的时候就重新连接
      this.initSocket();
    },
    handleClose() { // 关闭连接
      console.log('高拍仪websocket 关闭...');
    },
    handleOpen() {
      console.log('高拍仪websocket 开启...');
      this.getCams();
    },
    handleMessage(e) { // 接收数据
      console.log('处理接收到的数据...');
      console.log(e);
      console.log(e.data);
      console.log(new Uint8Array(e.data));
      let tempArr = new Uint8Array(e.data);
      tempArr.length && (tempArr[0] === 0x55 && tempArr[1] === 0x66) && this.getDetails(tempArr);
    },
    sendMsg() {
      this.websocket.send('hello');
    },
    // 获取连接设备的数据
    getCams() {
      let tempArr = new Uint8Array(3);
      tempArr[0] = 0x77;
      tempArr[1] = 0x88;
      tempArr[2] = 0x50;
      if (this.websocket && this.websocket.readyState === 1) {
          this.websocket.send(tempArr.buffer);
      }
    },
    // 获取当前连接产品的具体信息
    getDetails(tempArr) {
      let secondCode = tempArr[2];
      switch (secondCode) {
        case 0x50:
          let devNum = tempArr[3];
          break;
      
        default:
          break;
      }
    },
  }
}
</script>
