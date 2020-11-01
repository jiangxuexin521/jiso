<template>
    <div>
     <h2 class="c">--附近商家--</h2>
   <ul class="box">
        <li class="b" v-for="obj in list" :key="obj.id"
        @click="$router.push({path:'/detail',query:{id:obj.id}})"
        >
            <img class="store-img" :src="obj.img" alt/>
            <div class="lol">
                <h2 class="up">{{obj.name}}</h2>
               <div>
                   <star :num="parseFloat(obj.score)"></star>
                    销量{{obj.num}}
               </div>
                <div>配送时间:{{obj.minute}}</div>
            </div>
        </li>
    </ul>   
    <img class="loading" v-show="isShow" src="@/assets/css/images/loading.gif"> 
    </div>
</template>

<script>
import axios from 'axios'
import Star  from '@/components/star'
    export default {
         data(){
            return{
                 list:[],
                 pageNum:1,
                 isShow:true,
                 isFinish:false

            }
        },
        components:{
            Star
        },
        methods:{
      // 获取数据
      getData(){
        axios.get("http://admin.gxxmglzx.com/tender/test/get_store?current="+this.pageNum+"&size=10")
        .then((res)=>{
            this.list = [...this.list,...res.data.data.list]
            this.pageNum++;
            this.isShow=false;//loading 隐藏
            //判断是否请求完成
            if(this.list.length==res.data.data.total){
                  this.isFinish=true;
            }
            }).catch((err)=>{
                console.log(err);
            })
            }
        },
      created(){
    // 获取列表的数据
       this.getData()

        // 判断 当滚动条滚动高度 + 可视区的高度  = 整个页面的高度
        // 滚动事件
        window.onscroll = () => {
         
          let scrollTtop = document.documentElement.scrollTop;  // 获滚动条滚动高度
          let clientHeight = document.documentElement.clientHeight;//可视区高度
          let scrollHeight = document.documentElement.scrollHeight;//整个页面的高度

          //console.log(scrollTtop,clientHeight,scrollHeight)
          if((scrollTtop + clientHeight == scrollHeight)&&!this.isFinish){
            this.isShow=true;//loading
            this.getData();
          }

        }
    }
};
</script>

<style lang="scss" scoped>
.box{
    padding:0.2rem;
    .b{
        display: flex;
        .store-img{
            width: 1.52rem;
            margin-bottom: 5%;
            }
        .lol{
                flex :1;
                padding:0.05rem; 
                margin-left: 0.25rem;
            }
        }
        .loading{
           position:fixed;
           left:50%;
           top:50%; 
           transform:translate(-50%,-50%);
           width:1.4rem;
           height:2rem;
        }
    
}
</style>