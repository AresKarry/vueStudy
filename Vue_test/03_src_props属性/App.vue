<template>
  <div>
    
    <StudentKai name='karry' sex='male' :age=22 />
  </div>
</template>

<script>
//引入schoolkai组件
import StudentKai from './components/StudentKai.vue'
export default {
    name:'App',
    components:{StudentKai},
    
}
</script>

<style>

</style>