<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <transition-group name="wjk" appear>
        <h1 v-show='isShow' key="1">你好啊！我是王俊凯的亲亲妈咪！</h1>
        <h1 v-show='isShow' key="2">欢迎大家暑假来看电影《断桥》！</h1>
    </transition-group>
    
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
    /* 进入的起点,离开的终点 */
    .wjk-enter,.wjk-leave-to{
        transform:translateX(-100%)
    }
    .wjk-enter-active,.wjk-leave-active{
        transition: 0.5s linear;
    }
    /* 进入的终点,离开的起点 */
    .wjk-enter-to,.wjk-leave{
        transform:translateX(0)
    }
</style>