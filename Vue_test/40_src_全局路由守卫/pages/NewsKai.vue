<template>
    <ul>
        <li :style="{opacity}">我是王俊凯的亲亲妈咪</li>
        <li>news001 <input type="text"> </li>
        <li>news002 <input type="text"> </li>
        <li>news003 <input type="text"> </li>
   </ul>
</template>

<script>
    export default {
        name:'NewsKai',
        data() {
            return {
                opacity:1
            }
        },
        
        // mounted() {
        //     this.timer = setInterval(() => {
        //         this.opacity -= 0.01
        //         if (this.opacity <= 0) this.opacity = 1
        //     }, 16)
        // },
        // beforeDestroy(){
        //     clearInterval(this.timer)
        // },
        activated() {
            this.timer = setInterval(() => {
                this.opacity -= 0.01
                if (this.opacity <= 0) this.opacity = 1
                // console.log(123)
            }, 16)
        },
        deactivated() {
            clearInterval(this.timer)
            // console.log('啊，我失活了~')
        },
    }
</script>

<style>

</style>