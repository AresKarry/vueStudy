//引入vue
import Vue from 'vue'
//引入APP
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//关闭vue的生产提示
Vue.config.productionTip=false
//应用vue-router
Vue.use(VueRouter)
//创建vm
new Vue({
    render: h => h(App),
    router:router
}).$mount('#app')