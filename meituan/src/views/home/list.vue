<template>
    <div>
     <h2 class="c">--附近商家--</h2>
   <ul>
        <li class="b" v-for="obj in  appList" :key="obj.id">
            <img :src="obj.img" alt=""> 
            <img :src="obj.data" alt=""> 


            <p class="w">{{obj.name}}</p>
        </li>
    </ul>    
    </div>
</template>

<script>
import axios from 'axios'
    export default {
         data(){
            return{
                 appList:[]
            }
        },
       created(){
        //    axios.get('http://admin.gxxmglzx.com/tender/test/get_store/axios?current==1&size==10')
        axios({
            url:'http://admin.gxxmglzx.com/tender/test/get_store/axios?current=1&size=10',
            method:'get'
        }).then((res)=>{
                console.log(res);
            let result=res.data;
                if(result.errcode==200){
                 this.appList=result.data.list;
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        
    }
</script>

<style lang="scss" scoped>
.c{
    font-size:15px;
    text-align: center;
}

.b img{
    width:80px;
    height:70px;
    position: relative;
}
.w{
     float:right;
        // margin-right:175px;
        font-size:13px;
        text-align:left;
}

</style>