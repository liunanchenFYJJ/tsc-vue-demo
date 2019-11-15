<!--
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-11-15 08:41:46
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-11-15 12:01:36
 -->
<template>
  <div>
    文件读取
    <ul>
      <li>两种触发方式</li>
    </ul>
    <input type="file"
      id="file"
      ref="file"
      @change="handleChangeFiles($event)"
      multiple>
    <el-button type="primary" @click="addFiles">添加文件+</el-button>
    <!-- label的for属性绑定的id会触发 -->
    <div id="label">
      <label for="file">添加文件+label</label>
    </div>
    <el-button type="warning" @click="handleClear">清空所选文件夹</el-button>
    <br>
    <p>当前选择{{fileList.length}}个文件</p>
    TODO: 展示缩略图(只有单张上传)
    <ul>
      <li v-for="(item, index) in fileList" :key="index">{{item.name}}----{{item.type}}----{{item.percent}}
        <img :src="item.myURL" style="width: 60px; height: 60px;"/>
        <div :style="{'background': item.myURL}" style="width: 60px; height: 60px;"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FileReader',
  data() {
    return {
      fileList: [],
      myURL: '',
    };
  },
  methods: {
    handleChangeFiles(e) { // 处理事件
      const tempFileList = e.target.files;
      this.fileList = this.fileList.concat(...tempFileList);
      // 展示缩略图
      this.getThumbnails(tempFileList[tempFileList.length - 1]);
    },
    getThumbnails(singleFile) {   
      let reader = new FileReader();
      reader.readAsDataURL(singleFile);
      
      reader.onload = (evt) => {
        this.$message(`成功了`);
        singleFile.myURL = evt.target.result;
      };
      reader.onprogress = (evt) => {
        this.$message(`加载中...${evt.loaded}/${evt.total}`);
        singleFile.percent = evt.loaded / evt.total;
      };
      reader.onerror = (error) => {
        this.$message(`发生错误了${error}`);
      };
    },
    addFiles() { // click触发事件
      const fileInput = this.$refs['file'];
      fileInput && fileInput.click();
    },
    handleClear() { // 清空文件选择列表
      this.fileList = [];
    },
  },
};
</script>
<style lang="scss" scoped>
  #file {
    display: none;
  }
  #label {
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 1px dashed #000;
    text-align: center;
    border-radius: 10px;
    & > label {
      line-height: 200px;
      display: inline-block;
      height: inherit;
      width: inherit;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
