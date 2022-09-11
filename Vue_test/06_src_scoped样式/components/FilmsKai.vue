<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>电影名称：{{filmName}}</h2>
    <h2>电影导演：{{directorName}}</h2>
    <h2>角色名称：{{roleName}}</h2>
  </div>
</template>

<script>

  export default {
    name:'FilmsKai',
    data(){
      return {
          filmName:'断桥',
          directorName:'李玉',
          roleName:'孟超'        
      }
    }
  }
</script>
<style scoped>
  .box{
    background-color: rgb(9, 172, 236);
  }
</style>
