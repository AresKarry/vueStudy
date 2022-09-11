<template>
  <div>
    <h1 v-text="msg" ref='title'></h1>
    <button @click="show" ref='btn'>展示dom</button>
    <SchoolKai ref="sch"/>
  </div>
</template>

<script>
//引入schoolkai组件
import SchoolKai from './components/SchoolKai.vue'
export default {
    name:'App',
    components:{SchoolKai},
    data() {
        return {
            msg:'hello,karry'
        }
    },
    methods: {
        show(){
            //alert(this.$refs.title)
            console.log(this.$refs.title)//真实DOM元素
            console.log(this.$refs.btn)//真实DOM元素
            console.log(this.$refs.sch)//School组件的实例对象（vc）
        }
    },
}
</script>

<style>

</style>