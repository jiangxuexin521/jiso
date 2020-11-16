<template>
  <div class="bwrapper">
    <div class="bcontent">
      <Xhead :storeMsg="storeMsg"></Xhead>
      <van-tabs v-model="active" animated>
        <van-tab :title="'点餐'"><Order></Order></van-tab>
        <van-tab :title="'评论'"><Comment></Comment></van-tab>
        <van-tab :title="'商家'"> <seller :seller="seller"></seller></van-tab>
      </van-tabs>
    </div>

    <cart v-if="active == 0" :storeMsg="storeMsg"></cart>
  </div>
</template>

<script>
import axios from "axios";
import Cart from "@/views/cart";
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
      storeMsg: {},
    };
  },
  components: {
    Comment,
    Xhead,
    Order,
    Seller,
    Cart,
  },
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bwrapper", {
        click: true,
        bounce: false,
      });
    }, 1000);
    axios
      .get(
        "http://admin.gxxmglzx.com/tender/test/get_store_id?id=" +
          this.$route.query.id
      )
      .then((res) => {
        this.storeMsg = res.data.data;
      })
      .catch((err) => {
        // console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.bwrapper {
  height: 100vh;
  overflow: hidden;
}
</style>
