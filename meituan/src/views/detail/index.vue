<template>
    <div>
        <Xhead></Xhead>
    <van-tabs v-model="active" animated> 
    <van-tab :title="'点餐'">点餐页</van-tab>
     <van-tab :title="'评论'">评论页</van-tab>
      <van-tab :title="'商家'">商家页</van-tab>
    </van-tabs>
     {{$router.query.id}}
    </div>
</template>

<script>
import Xhead from './xhead'
    export default {
        data(){
            return{
                active
            }
        },
        components:{
            Xhead
        }
        
    }
</script>

<style lang="scss" scoped>

</style>