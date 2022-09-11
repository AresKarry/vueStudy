<template>
    <div>
        <h1>王俊凯角色列表</h1>
        <input type="text" placeholder="请输入名字" v-model='name'>
        <button @click='add'>添加</button>
        <ul>
            <li v-for='r in rolesList' :key='r.id'>{{r.name}}-{{r.film}}</li>
        </ul>
        <h2>count组件的求和为：{{sum}}</h2>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState } from 'vuex'
    export default {
        name:'RolesKai',
        data() {
            return {
                name:''
            }
        },
        computed:{
            ...mapState(['rolesList','sum'])
        },
        methods: {
            add(){
                const rolesObj ={id:nanoid(),name:this.name}
                this.$store.commit('ADD_ROLE',rolesObj)
                this.name=''
            }
        },
    }
</script>

<style>

</style>