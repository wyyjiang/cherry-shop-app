<template>
  <div class="addressList1">
    <div class="addressList">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
    <!-- <div @click="onclick" class="button">
      <van-button type="primary" block>添加购物地址</van-button>
    </div> -->
  </div>
</template>

<script>
import { Toast } from "vant";
import { searchAddressAPI, delAddressAPI } from "../services/user";
import { getToken } from "../utils/tools";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
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
      const uid = getToken();
      delAddressAPI(uid, index);
      this.list.splice(index, 1);
    },
    onClickLeft() {
      history.back(-1);
    },
    select(item, index) {
      console.log(item, index);
    },
    onclick() {
      localStorage.item();
    },
  },
  created() {
    const uid = getToken();
    this.list = searchAddressAPI(uid);
    
  },
};
</script>

<style scoped>
/* .addressList1 {
  position: relative;
}
.button {
 
  width: 95%;
  position: absolute;
  bottom: 5px;
  margin-left: 200px;
  z-index: 1000;
}
.van-button--block {
  width: 45%;
  height: 50px;
  border-radius: 0;
} */
</style>