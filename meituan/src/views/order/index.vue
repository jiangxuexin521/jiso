<template>
  <div class="order-container">
    <div class="list1">
      <ul>
        <li v-for="obj in nav" :key="obj.id">{{ obj.name }}</li>
      </ul>
    </div>

    <div class="a">
      <div>
        <div v-for="(obj, index) in goods" :key="index">
          <h2>{{ obj.name }}</h2>
          <ul>
            <li class="list2" v-for="prod in obj.content" :key="prod.id">
              <img class="ppad" :src="prod.img" alt="" />
              <p>{{ prod.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import axios from "axios";
export default {
  data() {
    return {
      nav: [],
      goods: [],
    };
  },
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )
      .then((res) => {
        console.log(res.data.data);
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;
        this.$nextTick(() => {
          let cateScroll = new BetterScroll(".list1", {
            click: true,
            bounce: false,
          });
          let prdScroll = new BetterScroll(".a", {
            click: true,
            bounce: false,
          });
        });
      });
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  padding-bottom: 50px;
  display: flex;
  .list1 {
    margin-right: 0.3rem;
    height: calc(100vh - 94px);
    flex: 1;
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background: #f5f5f5;
    }
  }
  .a {
    flex: 3;
    height: calc(100vh - 94px);
    .list2 {
      display: flex;
      .ppad {
        width: 1.5rem;
      }
      p {
        flex: 1;
      }
    }
  }
}
</style>
