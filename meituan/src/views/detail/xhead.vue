<template>
  <div class="container">
    <div class="back" @click="$router.go(-1)">&lt;</div>
    <div class="store-info">
      <img
        class="store-img"
        src="http://admin.gxxmglzx.com/tender/upload/test/store4.png"
        alt=""
      />
      <div class="store-msg">
        <p class="detail">
          由于奶盖为鲜奶打制，配送中奶盖可能会出现下沉和茶混的现象，如对口感有特别要求的顾客请选择奶盖分装；
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background: #2e2f3b;
  color: #fff;
  padding: 0.2rem;
  .back {
    font-size: 20px;
    margin-bottom: 0.2rem;
  }
  .store-info {
    display: flex;
    .store-img {
      width: 1.7rem;
      height: 1.26rem;
    }
    .store-msg {
      flex: 1;
      width: 0; /*不受子元素宽度撑大*/
      .detail {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
