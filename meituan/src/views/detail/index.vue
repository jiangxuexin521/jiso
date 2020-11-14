<template>
  <div class="bwrapper">
    <div class="bcontent">
      <Xhead></Xhead>
      <van-tabs v-model="active" animated>
        <van-tab :title="'点餐'"><Order></Order></van-tab>
        <van-tab :title="'评论'"><Comment></Comment></van-tab>
        <van-tab :title="'商家'"> <seller :seller="seller"></seller></van-tab>
      </van-tabs>
    </div>

    <!-- {{ $route.query.id }} -->
  </div>
</template>

<script>
import Seller from "@/views/seller/index";
import Order from "@/views/order/index";
import BetterScroll from "better-scroll";
import Xhead from "./xhead";
import Comment from "@/views/comment/index";
export default {
  data() {
    return {
      active: 0,
      seller: [],
    };
  },
  components: {
    Comment,
    Xhead,
    Order,
    Seller,
  },
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bwrapper", {
        click: true,
      });
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.bwrapper {
  height: 100vh;
  overflow: hidden;
}
</style>
