<template>
  <div>
    <CountKai/>
    <br><br><hr><br>
    <RolesKai/>
  </div>
</template>

<script>
  import CountKai from './components/CountKai.vue'
  import RolesKai from './components/RolesKai.vue'
  export default {
    name: "App",
    template: `<App></App>`,
    components:{CountKai,RolesKai},
    
  }
  
</script>
