<template>
  <div class="order-container">
    <div class="list1">
      <ul>
        <li
          :class="{ active: index == currentIndex, list: true }"
          v-for="(obj, index) in nav"
          @click="change(index)"
          :key="obj.id"
        >
          {{ obj.name }}
        </li>
      </ul>
    </div>

    <div class="a">
      <div>
        <div
          class="prod-cate-box"
          v-for="(obj, typeIndex) in goods"
          :key="typeIndex"
        >
          <h2>{{ obj.name }}</h2>
          <ul>
            <li
              class="list2"
              v-for="(prod, index) in obj.content"
              :key="prod.id"
            >
              <img class="ppad" :src="prod.img" alt="" />
              <div>
                <p>{{ prod.name }}</p>
                <p>{{ prod.price }}</p>
              </div>
              <div class="add">
                <span
                  class="iconfont icon-jianhao"
                  v-if="prod.count > 0"
                  @click="$store.commit('minus', { typeIndex, index })"
                ></span>
                <span class="num" v-if="prod.count > 0">{{ prod.count }}</span>
                <span
                  class="iconfont icon-jiahao-copy"
                  @click="$store.commit('add', { typeIndex, index })"
                ></span>
              </div>
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
      currentIndex: 0,
      scrollY: 0,
      pos: [],
    };
  },
  methods: {
    change(index) {
      let prodCateList = document.querySelectorAll(".prod-cate-box");
      console.log(prodCateList[index]);
      this.prodScroll.scrollToElement(prodCateList[index], 300);
      this.currentIndex = index;
    },
    getpos() {
      let prodCateList = document.querySelectorAll(".prod-cate-box");
      let A = 0;
      for (let i = 0; i < prodCateList.length; i++) {
        if (i == 0) {
          this.pos.push(0);
        } else {
          A += prodCateList[i - 1].offsetHeight;
          this.pos.push(A);
        }
      }
      console.log(this.pos);
    },
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

        this.$store.commit("save", this.goods);
        this.$nextTick(() => {
          this.cateScroll = new BetterScroll(".list1", {
            click: false,
            bounce: false,
          });
          this.prodScroll = new BetterScroll(".a", {
            click: false,
            bounce: false,
            probeType: 3,
          });
          this.prodScroll.on("scroll", (position) => {
            this.scrollY = Math.abs(position.y);
            console.log(this.scrollY);
          });
          this.getpos();
        });
      });
  },
  watch: {
    scrollY(val) {
      let cateList = document.querySelectorAll(".list");
      for (let index = 0; index < this.pos.length; index++) {
        let pos1 = this.pos[index];
        let pos2 = this.pos[index + 1];
        if (val >= pos1 && val < pos2) {
          this.currentIndex = index;
          this.cateScroll.scrollToElement(cateList[index], 300);
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  padding-bottom: 60px;
  display: flex;
  .list1 {
    margin-right: 0.3rem;
    height: calc(100vh - 94px);
    flex: 1;
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background: #f5f5f5;
      &.active {
        color: #ffc134;
      }
    }
  }
  .a {
    flex: 3;
    height: calc(100vh - 94px);
    .list2 {
      display: flex;
      position: relative;
      margin-bottom: 0.1rem;
      .ppad {
        width: 1.5rem;
      }
      p {
        flex: 1;
      }
      .add {
        position: absolute;
        right: 0.2rem;
        bottom: 0;
        .icon-jianhao {
          color: #e2e3e5;
          vertical-align: middle;
          font-size: 25px;
        }
        .icon-jiahao-copy {
          color: #ffc134;
          vertical-align: middle;
          font-size: 25px;
        }
      }
      .num {
        margin: 0 0.1rem;
        vertical-align: middle;
      }
    }
  }
}
</style>
