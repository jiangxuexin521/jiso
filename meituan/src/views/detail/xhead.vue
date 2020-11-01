<template>
  <div class="container">
    <div clas="back">$lt;</div>
    <div class="store-info">
      <img class="store-img src="">
      <div class="store-msg">
        <div class="ddd">
          1.由于奶盖为鲜奶打制，配送中奶盖可能会出现下沉和茶混的现象，对口感有特别要求的顾客选择奶盖分装
        </div>
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
      width:0;
      .ddd {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
