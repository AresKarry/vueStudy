<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>电影名称：{{filmName}}</h2>
    <h2>电影导演：{{directorName}}</h2>
    <h2>角色名称：{{roleName}}</h2> 
    <button @click='sendStudentName'>把电影名给star组件</button>
  </div>
</template>

<script>

  export default {
    name:'FilmsKai',
    data(){
      return {
          filmName:'断桥',
          directorName:'李玉',
          roleName:'孟超',       
      }
    }, 
    methods: {
      sendStudentName(){
        this.$bus.$emit('hello',this.filmName)
      }
    },
    beforeDestroy(){
      this.$bus.$off('hello')
    }
  }
</script>

<style scoped>
  .box{
    background-color: rgb(9, 172, 236);
    padding: 5px;
    margin-top: 30px;
  }
</style>
