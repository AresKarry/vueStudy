<template>
    <div>
        <h1>王俊凯角色列表</h1>
        <input type="text" placeholder="请输入名字" v-model='name'>
        <button @click='add'>添加</button>
        <button @click='addWang'>添加一个姓王的人</button>
        <button @click='addPersonServe'>添加一个人random</button>

        <ul>
            <li v-for='r in rolesList' :key='r.id'>{{r.name}}-{{r.film}}</li>
        </ul>
        <h2>count组件的求和为：{{sum}}</h2>
        <h2>列表中第一个人的名字是：{{firstPersonName}}</h2>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'RolesKai',
        data() {
            return {
                name:''
            }
        },
        computed:{
            rolesList(){
                return this.$store.state.rolesAbout.rolesList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                return this.$store.getters['rolesAbout/firstPersonName']
            },
        },
        methods: {
            add(){
                const rolesObj ={id:nanoid(),name:this.name}
                this.$store.commit('rolesAbout/ADD_ROLE',rolesObj)
                this.name=''
            },
            addWang(){
                const rolesObj ={id:nanoid(),name:this.name}
                this.$store.dispatch('rolesAbout/addActorWang',rolesObj)
                this.name=''

            },
            addPersonServe(){
                this.$store.dispatch('rolesAbout/addPersonServe')
            }
        },
        mounted(){
            // console.log(this.$store)
        }
    }
</script>

<style>

</style>