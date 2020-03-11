<!--
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-03-09 16:18:51
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-10 16:46:20
-->
<template>
  <div class="take_pic">
    <video id="video"></video>
    <div class="btns">
      <el-button type="primary" @click="handleOpenCamera">启动</el-button>
      <el-button type="primary" @click="actionPic">拍照</el-button>
      <el-button type="primary" @click="closeCamera">关闭</el-button>
    </div>
    <div class="pic_list">
      <canvas id="pic"></canvas>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';

export default {
  name: 'TakePic',
  data() {
    return {
      mediaStream: null,
    };
  },
  mounted() {

  },
  activated() {
    console.log('active');
  },
  deactivated() {
    console.log('deactive');
  },
  beforeDestroy() {
    console.log('take a pic');
    this.closeCamera();
    this.mediaStream = null;
  },
  methods: {
    // 拍照
    actionPic() {
      let canvas = document.getElementById('pic');
      let context = canvas.getContext('2d');
      context.drawImage(document.getElementById('video'), 0, 0, 200, 150);
    },
    // 关闭摄像头
    closeCamera() {
      this.mediaStream && this.mediaStream.getTracks().length && (
        this.mediaStream.getTracks().forEach(steam => {
          steam.stop();
        })
      )
    },
    // 加上防抖
    handleOpenCamera: _.debounce(function() {
      this.openCamera();
    }, 1000),
    // 打开摄像头
    openCamera() {
        // 想要获取一个最接近 1280x720 的相机分辨率
      var constraints = { audio: false, video: { width: 1280, height: 720 } }; 

      let cameraPromise = navigator.mediaDevices.getUserMedia(constraints);
      cameraPromise.then((mediaStream) => {
        this.mediaStream = mediaStream;
        var video = document.getElementById('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch((err) => { console.log(err.name + ": " + err.message); }); // 总是在最后检查错误
    },
  },
}
</script>
<style lang="scss" scoped>
  .take_pic {
    width: 100%;
    height: 150px;
    display: flex;
    #video {
      height: 150px;
      width: 150px;
      background: lightgrey;
    }
    .btns {
      width: 80px;
      height: 150px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border: 1px solid lightgrey;
      & > button {
        margin: 0;
      }
    }
    .pic_list {
      display: flex;
      flex-direction: column;
      .pic {
        width: 120px;
        height: 60px;
      }
    }
  }
</style>