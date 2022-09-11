import axios from 'axios'
import { nanoid } from 'nanoid'
// 人员管理功能相关的配置
export default {
    namespaced:true,
    actions:{
        addActorWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('ADD_ROLE',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServe(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_ROLE',{id:nanoid(),name:response.data})
                },
                error=>{
                    alert(err.msg)
                }
            )
        }
    },
    mutations:{
        ADD_ROLE(state,value){
            state.rolesList.unshift(value)
        }
    },
    state:{
        rolesList:[
            {id:'001',name:'孟超',film:'断桥'},
            {id:'002',name:'成朗',film:'万里归途'},
            {id:'003',name:'周正',film:'刺猬'},
            {id:'004',name:'马山',film:'749局'}
        ]
    },
    getters:{
      firstPersonName(state){
        return state.rolesList[0].name
      }
    }
}