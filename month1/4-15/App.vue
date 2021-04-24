<!--template 编写HTML-->
<template>
  <div>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg: 'vue-cli3开发单文件组件'
    };
  }
};
</script>
<!--scoped表示注入，当前的样式只对当前的组件中的结果有效-->
<style scoped>
h3{
  color:red;
}
</style>