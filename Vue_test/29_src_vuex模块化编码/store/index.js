// 该文件用于创建vuex中最核心的store
//引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
import countOptions from './count'
import rolesOptions from './roles'

//应用vuex
Vue.use(Vuex)




// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        rolesAbout:rolesOptions
    }
})
 