<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h2>当前求和放大十倍为：{{bigSum}}</h2>
        <h2>我在看{{star}}的{{film}}</h2>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select> 
        <button @click="increment">+</button> 
        <button @click="decrement">-</button> 
        <button @click="incrementOdd">当前求和为奇数再加</button> 
        <button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:'CountKai',
        data() {
            return {
                n:1,//当前用户选择的数字
            }
        },
        computed:{
            //我亲自写的计算属性
            // sum(){
            //     return this.$store.state.sum
            // },
            // star(){
            //     return this.$store.state.star
            // },
            // film(){
            //     return this.$store.state.film
            // },
            // bigSum(){
            //     return this.$store.getters.bigSum
            // },

            // 借助mapState生成计算属性，从state中读取数据（对象写法）
            // ...mapState({sum:'sum',star:'star',film:'film'}),

            // 借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum','star','film']),

            ...mapGetters(['bigSum'])
            
        },
        methods: {
            increment(){
                this.$store.commit('JIA',this.n)
            },
            decrement(){
                this.$store.commit('JIAN',this.n)
            },
            incrementOdd(){
                this.$store.dispatch('jiaOdd',this.n)
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.n)
            },
        },
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>