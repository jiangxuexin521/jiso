<template>
    <div>
    <ul class="list">
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
                console.log(res.data.data)
                if(res.data.errcode==200){
                 this.fenleiList=res.data.data;
            }
            }).catch((error)=>{
                console.log(error)
            })
        }
        
    }
</script>

<style lang="scss" scoped>
.list{
    display: flex;
    flex-wrap: wrap;
}
.a{
    width:20%;
    text-align: center;
     margin-top: 0.3rem;

}
.a img{
    width:60%;
}

</style>