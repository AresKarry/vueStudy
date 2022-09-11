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

            // 借助mapState生成计算属性，从state中读取数据（对象写法）
            // ...mapState({sum:'sum',star:'star',film:'film'}),

            // 借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum','star','film']),

            ...mapGetters(['bigSum'])
            
        },
        methods: {
            // 我亲自写的方法，有点多~
            // increment(){
            //     this.$store.commit('JIA',this.n)
            // },
            // decrement(){
            //     this.$store.commit('JIAN',this.n)
            // },
            // incrementOdd(){
            //     this.$store.dispatch('jiaOdd',this.n)
            // },
            // incrementWait(){
            //     this.$store.dispatch('jiaWait',this.n)
            // },

            
            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组对象写法）
            // ...mapMutations(['JIA','JIAN'])

            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),
            
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
        },
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>