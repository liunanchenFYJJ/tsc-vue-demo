<template>
  <div>
    文件读取
    <input type="file"
            id="file"
            ref="file"
            @change="handleChangeFiles($event)"
            multiple>
    <br>
    <el-button type="primary" @click="addFiles">添加文件+</el-button>
    <!-- label的for属性绑定的id会触发 -->
    <div id="label">
      <label for="file">添加文件+label</label>
    </div>
    <el-button type="primary" @click="handleClear">清空所选文件夹</el-button>
    <br>
    <p>当前选择{{fileList.length}}个文件</p>
    TODO: 展示缩略图
    <ul>
      <li v-for="(item, index) in fileList" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FileReader',
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    handleChangeFiles(e) { // 处理事件
      console.log(e);
      console.log(e.target.files);
      const tempFileList = e.target.files;
      // this.fileList = [];
      this.fileList = this.fileList.concat(...tempFileList);
      console.log(this.fileList);
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
    width: 200px;
    height: 200px;
    border: 1px dashed #000;
    text-align: center;
    & > label {
      line-height: 200px;
    }
  }
</style>
