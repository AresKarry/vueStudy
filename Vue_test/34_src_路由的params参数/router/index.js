// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
//
import AboutKai from '../pages/AboutKai.vue'
import HomeKai from '../pages/HomeKai.vue'
import NewsKai from '../pages/NewsKai.vue'
import MessageKai from '../pages/MessageKai.vue'
import DetailKai from '../pages/DetailKai.vue'


//创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:AboutKai
        },
        {
            path:'/home',
            component:HomeKai,
            children:[
                {
                    path:'news',
                    component:NewsKai
                },
                {
                    path:'message',
                    component:MessageKai,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:DetailKai
                        }
                    ]
                }
            ]
        },
    ]
})