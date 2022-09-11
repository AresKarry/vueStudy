<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'AboutKai',
        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
            // ...
             if(to.meta.isAuth){
                if(localStorage.getItem('star')==='karry'){
                    next()
                }else{
                    alert('你不是大明星王俊凯，不放行！！！')
                }
            }else{
                next()
            }
        },
        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave (to, from, next) {
            // ...
            next()
        }
    }
</script>

<style>

</style>