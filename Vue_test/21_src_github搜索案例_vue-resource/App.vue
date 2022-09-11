<template>
  <div class="container">
    <SearchKai/>
    <ListKai/>
  </div>
</template>

<script>
  import SearchKai from './components/SearchKai.vue'
  import ListKai from './components/ListKai.vue'

  export default {
    name: "App",
    template: `<App></App>`,
    components:{SearchKai,ListKai},
    methods: {
       
    },
  }
  
</script>
