<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>演员姓名：{{actorName}}</h2>
    <h2>演员年龄：{{actorAge}}</h2>
    <h2>粉丝名称：{{actorFans}}</h2>
    <button @click='sendStarName'>点我把name传给APP</button>
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
    methods: {
      sendStarName(){
        this.getStarName(this.actorName,'孟超','马山','成朗','周正')
      }
    },
  }
</script>
<style scoped lang="css">
  
  .box{
    background-color: skyblue;
    padding: 5px;
    
  }
</style>
