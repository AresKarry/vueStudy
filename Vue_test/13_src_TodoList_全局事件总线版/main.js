//引入vue
import Vue from 'vue'
//引入APP
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip=false
 

//
new Vue({
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this//安装全局事件总线
    }
}).$mount('#app')