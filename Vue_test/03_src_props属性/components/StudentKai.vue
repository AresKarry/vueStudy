<template>
  <div class='demo'>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click='change'>changeAge</button>
  </div>
</template>

<script>
export default {
    name:'StudentKai',
    data(){
        return {
            msg:'我是王俊凯的亲亲妈咪',
            myAge:this.age
        }
    },
    methods: {
        change(){
            this.myAge++
        }
    },
    //简单声明接收
    // props:['name','sex','age']
    //接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }
    props:{
        name:{
            type:String,//name的类型是字符串
            required:true//name的类型是必要的
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>

<style>
    .demo{
        background-color: aquamarine;
    }
</style>