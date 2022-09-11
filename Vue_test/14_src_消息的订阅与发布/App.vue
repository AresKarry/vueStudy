<template>
  <div class="app">
    <h1>{{msg}}</h1> 
    <StarKai/> 
    <FilmsKai/>
  </div>
</template>

<script>
//
  import StarKai from './components/StarKai.vue'
  import FilmsKai from './components/FilmsKai.vue'
  export default {
    
    name:'App',
    template:`<App></App>`,
    components:{
      StarKai,
      FilmsKai
    },
    data() {
      return {
        msg:'欢迎来到王俊凯的小世界',
      }
    }, 
  }
  
</script>

<style>
.app{
  background-color: pink;
  padding: 5px;
}
</style>