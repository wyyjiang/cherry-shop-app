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
export default {
  data() {
    return {
      chosenAddressId: "1",
      list,
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
      this.$router.push({
        name: "addressEdit",
      });
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    onClickLeft() {
      history.back(-1);
    },
  },
};
</script>

<style>
</style>