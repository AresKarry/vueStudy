<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>演员姓名：{{actorName}}</h2>
    <h2>演员年龄：{{actorAge}}</h2>
    <h2>粉丝名称：{{actorFans}}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法……）
  export default {
    name:'StarKai',
    data(){
      return {
          actorName:'王俊凯',
          actorAge:22,
          actorFans:'小螃蟹'        
      }
    },
    methods:{

    }
  }
</script>

<style>
/* 组件的样式 */
  .box{
    background-color: pink;
  }
</style>