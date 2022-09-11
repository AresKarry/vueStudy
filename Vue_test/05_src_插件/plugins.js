export default {
    install(Vue){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
        //定义全局指令 
		Vue.directive('fbind', {
			//当指令与元素成功绑定时，该函数执行
			bind(element, binding) {
				element.value = binding.value
			},
			//指令所在元素被插入页面时，该函数被调用
			inserted(element, binding) {
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element, binding) {
				element.value = binding.value
				element.focus()
			}

		})

        //定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:100
                }
            }
        })

        //给vue原型上添加一个方法(vm和VC就都能用了)
        Vue.prototype.hello=()=>{alert('hello，你好哇，我是王俊凯的亲亲妈咪')}
    }
}