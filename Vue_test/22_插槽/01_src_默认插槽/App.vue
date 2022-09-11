<template>
  <div class="container">
    <CategoryKai title='美食'> 
      <img src="./assets/123.jpg" alt="">
    </CategoryKai>
    <CategoryKai title='游戏'> 
      <ul>
			  <li v-for='(g,index) in games' :key="index">{{g}}</li>
		  </ul>
    </CategoryKai>
    <CategoryKai title='电影'> 
      <video controls src="./assets/qiao.mp4"></video>
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
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>