<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h2>当前求和放大十倍为：{{bigSum}}</h2>
        <h2>我在看{{star}}的{{film}}</h2>
        <h2>下方组件的总人数是：{{rolesList.length}}</h2>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select> 
        <button @click="increment(n)">+</button> 
        <button @click="decrement(n)">-</button> 
        <button @click="incrementOdd(n)">当前求和为奇数再加</button> 
        <button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
    import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
    export default {
        name:'CountKai',
        data() {
            return {
                n:1,//当前用户选择的数字
            }
        },
        computed:{

            // 借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState('countAbout',['sum','star','film']),
            ...mapState('rolesAbout',['rolesList']),

            ...mapGetters('countAbout',['bigSum'])
            
        },
        methods: {
            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
            ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
            
            ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
        },
        mounted(){
            // console.log(this.$store)
        }
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>