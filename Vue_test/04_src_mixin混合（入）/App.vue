<template>
  <div>
    
    <StudentKai/>
    <SchoolKai/>
  </div>
</template>

<script>
//引入schoolkai组件
import StudentKai from './components/StudentKai.vue'
import SchoolKai from './components/SchoolKai.vue'
export default {
    name:'App',
    components:{StudentKai,SchoolKai},
    
}
</script>

<style>

</style>