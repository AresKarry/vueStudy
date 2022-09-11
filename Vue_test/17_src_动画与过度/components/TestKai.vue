<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <transition appear>
        <h1 v-show='isShow'>你好啊！我是王俊凯的亲亲妈咪！</h1>
    </transition>
    
  </div>
</template>

<script>
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