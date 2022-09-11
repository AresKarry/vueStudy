<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>演员姓名：{{actorName}}</h2>
    <h2>演员年龄：{{actorAge}}</h2>
    <h2>粉丝名称：{{actorFans}}</h2>
    
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
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
      this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        console.log('有人发布了hello消息，我是hello消息的回调函数，哈哈~',msgName,data)
      })
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pubId)
    },
  }
</script>

<style scoped lang="css">
  
  .box{
    background-color: skyblue;
    padding: 5px;
    
  }
</style>
