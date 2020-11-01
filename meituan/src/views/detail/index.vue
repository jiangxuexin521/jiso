<template>
    <div>
        <Xhead></Xhead>
     我是详情页
     {{$router.query.id}}
    </div>
</template>

<script>
import Xhead from './xhead'
    export default {
        components:{
            Xhead
        }
        
    }
</script>

<style lang="scss" scoped>

</style>