<template>
  <!-- 组件的结构 -->
  <div>
    <h2>电影名称：{{filmName}}</h2>
    <h2>电影导演：{{directorName}}</h2>
    <h2>角色名称：{{roleName}}</h2>
    <input type="text" v-fbind:value='filmName'>
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

