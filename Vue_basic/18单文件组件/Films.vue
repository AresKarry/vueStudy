<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>电影名称：{{filmName}}</h2>
    <h2>电影导演：{{directorName}}</h2>
    <h2>角色名称：{{roleName}}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法……）
  export default {
    name:'Films',
    data:{
      return:{
          filmName:'断桥',
          directorName:'李玉',
          roleName:'孟超'        
      }
    }
  }
</script>

