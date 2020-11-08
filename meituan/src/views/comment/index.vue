<template>
  <div>
    <Header :list="list"></Header>
    <List :list="list" @se="fn"></List>
  </div>
</template>

<script>
import axios from 'axios';
import List from './list';
import Header from './Header';
    export default {
        components:{
            Header,
            List
        },
        data(){
            return{
               id:this.$route.query.id,
               list:{}
            };
        },
        created(){
            this.getData(1);
        },
        methods:{
            fn(id){
                this.getData(id);
            },
         getData(typeId) {
      axios
        .get(
          `http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeId}`
        )
        .then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
