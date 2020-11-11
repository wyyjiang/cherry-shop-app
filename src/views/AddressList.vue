<template>
  <div class="addressList">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { list } from "../utils/list";
// import { getAddres } from "../services/user";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list:list
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
      this.$router.push({
        name: "AddressEdit",
      });
    },
    onEdit(item, index) {
      Toast("删除地址:" + index);
      this.list.splice(index, 1);
    },
    onClickLeft() {
      history.back(-1);
    },
  },
 
};
</script>

<style>
</style>