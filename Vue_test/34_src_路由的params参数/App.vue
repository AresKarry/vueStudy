<template>
  <div>
    <BannerKai/>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始HTML中，我们使用a标签实现页面跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="">Home</a> -->

          <!-- vue中借助router-link标签实现路由的切换 -->
          <router-link class="list-group-item" active-class='active' :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item" active-class='active' to="/home">Home</router-link>

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerKai from './components/BannerKai.vue'

  export default {
    name: "App",
    template: `<App></App>`,
    components:{BannerKai}
  }
  
</script>
