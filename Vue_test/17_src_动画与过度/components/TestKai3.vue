<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <transition-group 
        appear
        name="animate__animated animate__bounce" 
		enter-active-class="animate__swing"
		leave-active-class="animate__backOutUp"
    >
        <h1 v-show='!isShow' key="1">你好啊！我是王俊凯的亲亲妈咪！</h1>
        <h1 v-show='isShow' key="2">欢迎大家暑假来看电影《断桥》！</h1>
    </transition-group>
    
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style>
    h1{
        background-color: skyblue;
    }
</style>