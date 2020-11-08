<template>
 <div class="header-box">
    <div class="store-score">
      <div class="num">{{list.delivery}}</div>
      <div>商家评分</div>
    </div>
    <div class="score">
      <div>
        <span>口味</span>
          <Star :num="list.flavor">{{list.flavor}} 分</Star>
          </div>
      <div>
        <span>包装</span>
        <Star :num="list.packing">{{list.packing}} 分</Star>
        </div>
    </div>
    <div class="peisong-score">
      <div class="num">{{list.score}}</div>
      <div>配送评分</div>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star'
    export default {
      props:['list'],
        components:{
            Star
        }
    }
</script>

<style lang="scss" scoped>
.header-box{
    display:flex;
    padding:0.3rem;
span{
      padding-left:0.3rem;
      display:inline-block;
      }
    }
    .store-score,
    .peisong-score{
        width:1.86rem;
        text-align:center;
        font-size:0.28rem;
        .num{
            font-size:0.54rem;
            font-weight:bold;
            line-height:0.54rem;
        }

    }
   .store-score {
    .num {
      color: #ffb000;
    }
  }

  .peisong-score {
    .num {
      color: #999;
    }
  }

  .score {
    flex: 1;
  }

</style>