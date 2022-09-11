<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>演员姓名：{{actorName | mySlice}}</h2>
    <h2>演员年龄：{{actorAge}}</h2>
    <h2>粉丝名称：{{actorFans}}</h2>
    <button @click='test'>test</button>
  </div>
</template>

<script>

  export default {
    name:'StarKai',
    data(){
      return {
          actorName:'王俊凯karrywang',
          actorAge:22,
          actorFans:'小螃蟹'        
      }
    },
    methods:{
      test(){
        this.hello()
      }
    }
  }
</script>

