// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
//
import AboutKai from '../pages/AboutKai.vue'
import HomeKai from '../pages/HomeKai.vue'
import NewsKai from '../pages/NewsKai.vue'
import MessageKai from '../pages/MessageKai.vue'
import DetailKai from '../pages/DetailKai.vue'


//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:AboutKai,
            meta:{isAuth:true,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:HomeKai,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:NewsKai,
                    meta:{isAuth:true,title:'新闻'},
                    // 独享路由守卫
                    // beforeEnter:(to,from,next)=>{
                    //     // 判断是否需要鉴权
                    //     if(to.meta.isAuth){
                    //         if(localStorage.getItem('star')==='karry'){
                    //             next()
                    //         }else{
                    //             alert('你不是大明星王俊凯，不放行！！！')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:MessageKai,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:DetailKai,
                            // meta:{isAuth:true,title:'详情'},
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
// 全局前置路由守卫——初始化的时候、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     // 判断是否需要鉴权
//     if(to.meta.isAuth){
//         if(localStorage.getItem('star')==='karry'){
//             next()
//         }else{
//             alert('你不是大明星王俊凯，不放行！！！')
//         }
//     }else{
//         next()
//     }
// })

// // 全局后置路由守卫——初始化的时候、每次路由切换之后被调用
// router.afterEach((to,from)=>{
//     // 判断是否需要鉴权
//      document.title=to.meta.title
// })
export default router