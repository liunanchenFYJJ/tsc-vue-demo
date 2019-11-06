<template>
  <div>
    {{$t('TXT.msg')}}
    <div>
      <el-radio v-model="radio" label="zh">中文</el-radio>
      <el-radio v-model="radio" label="en">English</el-radio>
    </div>
  </div>
</template>
<script>
export default {
  name: 'I18N',
  data() {
    return {
      radio: 'zh',
    };
  },
}
</script>
