<template>
  <div class="comment-wrapper">
    <div>
      <Header :list="list"></Header>
      <List :list="list" @se="fn"></List>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import List from "./list";
import Header from "./Header";
import BetterScroll from "better-scroll";
export default {
  components: {
    Header,
    List,
  },
  data() {
    return {
      id: this.$route.query.id,
      list: {},
    };
  },
  created() {
    this.getData(1);
  },
  methods: {
    fn(id) {
      this.getData(id);
    },
    getData(typeId) {
      axios
        .get(
          `http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeId}`
        )
        .then((res) => {
          console.log(res.data.data);
          this.list = res.data.data;
          this.$nextTick(() => {
            new BetterScroll(".comment-wrapper", {
              click: false,
              bounce: false,
            });
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-wrapper {
  height: calc(100vh - 44px);
}
</style>
