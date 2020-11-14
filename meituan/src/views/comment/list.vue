<template>
  <div class="list-container">
    <div class="type">
      <span
        :class="{ active: obj.id == typeId }"
        v-for="obj in list.label"
        :key="obj.id"
        @click="change(obj.id)"
      >
        {{ obj.name }} ({{ obj.count }})
      </span>
    </div>
    <ul class="list-box">
      <li class="list" v-for="obj in list.rate" :key="obj.id">
        <img class="list-image" :src="obj.portrait" alt />
        <div>
          <div>{{ obj.name }}</div>
          <div>{{ obj.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      typeId: 1,
    };
  },

  methods: {
    change(id) {
      this.$emit("se", id);
      this.typeId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  padding: 0.2rem;
  border-top: 0.2rem solid#f4f4f4;

  .type {
    padding-bottom: 0.3rem;
    span {
      padding: 0.1rem 0.24rem;
      border: 1px solid#bbb;
      border-radius: 0.28rem;
      margin-right: 0.15rem;
      display: inline-block;
      margin-bottom: 0.1rem;
      &.active {
        background: #fffbf1;
        border: 1px solid#ffb000;
      }
    }
  }
  .list-box {
    .list {
      display: flex;
      margin-bottom: 0.2rem;
      .list-image {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>
