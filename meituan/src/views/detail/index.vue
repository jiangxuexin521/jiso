<template>
    <div>
        <Xhead></Xhead>
    <van-tabs v-model="active" animated> 
    <van-tab :title="'点餐'">点餐页</van-tab>
     <van-tab :title="'评论'"><Comment></Comment></van-tab>
    <van-tab :title="'商家'">商家页</van-tab>
    </van-tabs>
     {{$route.query.id}}
    </div>
</template>

<script>
import Xhead from './xhead'
import Comment from '@/views/comment/index'
    export default {
        data(){
            return {
                active:0
            }
        },
        components:{
            Comment,
            Xhead
        }
        
    }
</script>

<style lang="scss" scoped>

</style>