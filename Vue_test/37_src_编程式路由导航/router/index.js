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
                            component:DetailKai,
                            // props的第一种写法，值为对象,该对象中的所有key-value都会以props的方式传给Detail
                            // props:{a:1,b:'wjk'}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail
                            // props:true

                            //props的第三种写法，值为函数
                            props($router){
                                return {id:$router.query.id,title:$router.query.title}
                            }
                        }
                    ]
                }
            ]
        },
    ]
})