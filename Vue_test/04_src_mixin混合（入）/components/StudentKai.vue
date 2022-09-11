<template>
  <div class='demo'>
    <h2 @click='showName'>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
// import {mixin,mixin2} from '../mixin'
export default {
    name:'StudentKai',
    data(){
        return {
            name:'王俊凯的亲亲妈咪',
            sex:'femal'
        }
    },
    // mixins:[mixin,mixin2]
}
</script>