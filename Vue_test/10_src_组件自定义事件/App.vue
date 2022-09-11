<template>
  <div class="app">
    <h1>{{msg}}，电影名字是：{{filmName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <StarKai :getStarName='getStarName'/>

    <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <FilmsKai v-on:karry='getFilmsName' @wang='m1'/> -->

    <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据（第二种写法，使用ref）-->
    <FilmsKai ref='films' @click.native='show'/>
  </div>
</template>

<script>
//
  import StarKai from './components/StarKai.vue'
  import FilmsKai from './components/FilmsKai.vue'
  export default {
    
    name:'App',
    template:`<App></App>`,
    components:{
      StarKai,
      FilmsKai
    },
    data() {
      return {
        msg:'欢迎来到王俊凯的小世界',
        filmName:''
      }
    },
    methods: {
      getStarName(name,...params){
        console.log('APP收到明星名字了：',name,params)
      },
      getFilmsName(name){
        console.log('APP收到电影名字了：',name)
        this.filmName=name
      },
      m1(){
        console.log('wang事件被触发了')
      },
      show(){alert(123)}
    },
    mounted() {
      //  console.log(this.$refs.films)
      this.$refs.films.$on('karry',this.getFilmsName)//绑定自定义事件
      // this.$refs.films.$once('karry',this.getFilmsName)//绑定自定义事件（一次性）
    },
  }
  
</script>

<style>
.app{
  background-color: pink;
  padding: 5px;
}
</style>