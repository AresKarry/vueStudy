<template>
  <div>
    <StarKai/>
    <hr>
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
    }

  }
  
</script>

<style>

</style>