<template>
  <!-- 组件的结构 -->
  <div class="box">
    <h2>电影名称：{{filmName}}</h2>
    <h2>电影导演：{{directorName}}</h2>
    <h2>角色名称：{{roleName}}</h2>
    <h2>{{number}}</h2>
    <button @click='add'>点我number++</button>
    <button @click='sendFilmsName'>点我把name传给APP</button>
    <button @click='unbind'>解绑karry事件</button>
    <button @click="death">销毁当前Films组件的实例(vc)</button>
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
          number:22        
      }
    },
    methods: {
      add(){
        console.log('大家好，我被调用了')
        this.number++
        //console.log('大家好，我被调用了')
      },
      sendFilmsName(){
        //触发Films组件实例身上的karry事件
        this.$emit('karry',this.filmName)
        //this.$emit('wang')
      },
      unbind(){
        this.$off('karry')//只用于解绑一个自定义事件
        //this.$off(['karry','wang'])//解绑多个自定义事件
        // this.$off()//解绑所有的自定义事件
      },
      death(){
        this.$destroy() //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
      }
    },
    
  }
</script>
<style scoped>
  .box{
    background-color: rgb(9, 172, 236);
    padding: 5px;
    margin-top: 30px;
  }
</style>
