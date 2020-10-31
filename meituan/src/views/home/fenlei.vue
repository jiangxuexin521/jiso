<template>
    <div>
    <ul>
        <li class="a" v-for="obj in fenleiList" :key="obj.id">
            <img :src="obj.img" alt="">
            <p>{{obj.name}}</p>
        </li>
    </ul>    

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                fenleiList:[]
            }
        },
        created(){
            axios.get('http://admin.gxxmglzx.com/tender/test/get_type')
            .then((res)=>{
                console.log(res.data)
                let result=res.data;
                if(result.errcode==200){
                 this.fenleiList=result.data;
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        
    }
</script>

<style lang="scss" scoped>
  .a{
    float:left;
    text-align: center;
   }
   .a img{
       height:55px;
       margin: 10px;
   }

</style>