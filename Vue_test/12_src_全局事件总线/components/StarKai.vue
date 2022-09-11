<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>演员姓名：{{actorName}}</h2>
    <h2>演员年龄：{{actorAge}}</h2>
    <h2>粉丝名称：{{actorFans}}</h2>
    
  </div>
</template>

<script>

  export default {
    name:'StarKai',
    props:['getStarName'],
    data(){
      return {
          actorName:'王俊凯',
          actorAge:22,
          actorFans:'小螃蟹'        
      }
    }, 
    mounted() {
      // console.log('star',this)
      this.$bus.$on('hello',(data)=>{
        console.log('我是star组件，收到了数据',data)
      })
    },
  }
</script>

<style scoped lang="css">
  
  .box{
    background-color: skyblue;
    padding: 5px;
    
  }
</style>
