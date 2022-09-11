<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <StarKai></StarKai>
    <FilmsKai></FilmsKai>
  </div>
</template>

<script>
//
  import StarKai from './components/StarKai.vue'
  import FilmsKai from './components/FilmsKai.vue'
  export default {
  components: { FilmsKai, StarKai },
    name:'App',
    template:`<App></App>`,
    component:{
      StarKai,
      FilmsKai
    }

  }
  
</script>

<style>

</style>