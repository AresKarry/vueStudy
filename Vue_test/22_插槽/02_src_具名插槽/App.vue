<template>
  <div class="container">
    <CategoryKai title='美食'> 
      <img slot="one" src="./assets/123.jpg" alt="">
      <a slot="two" href="">更多美食</a>
    </CategoryKai>
    <CategoryKai title='游戏'> 
      <ul slot="one">
			  <li v-for='(g,index) in games' :key="index">{{g}}</li>
		  </ul>
      <div slot="two" class="foot">
        <a href="">单击游戏</a>
        <a href="">网络游戏</a>
      </div>
      
    </CategoryKai>
    <CategoryKai title='电影'> 
      <video slot="one" controls src="./assets/qiao.mp4"></video>
      <template v-slot:two>
        <div class="foot">
          <a href="">经典</a>
          <a href="">热门</a>
          <a href="">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
      
    </CategoryKai>
  </div>
</template>

<script>
  import CategoryKai from './components/CategoryKai.vue'

  export default {
    name: "App",
    template: `<App></App>`,
    components:{CategoryKai},
    data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['英雄联盟','王者荣耀','暴走大侠','爱神花园'],
				films:['《断桥》','《刺猬》','《万里归途》','《749局》']
			}
		},
    methods: {
       
    },
  }
  
</script>
<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
  h4{
    text-align: center;
  }
</style>