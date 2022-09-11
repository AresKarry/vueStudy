<template>
  <div>
    <Star></Star>
    <Films></Films>
  </div>
</template>

<script>
//
  import Star from './Star.vue'
  import Films from './Films.vue'
  export default {
  components: { Films },
    name:'App',
    template:`<App></App>`,
    component:{
      Star,
      Films
    }

  }
  
</script>

<style>

</style>