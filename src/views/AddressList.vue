<template>
  <div class="addressList1">
    <div class="top">
      <van-nav-bar
        class="addresslist_main"
        title="地址管理"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="empty" v-if="isEmpty">
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="还没有地址哦~快去添加一个地址吧！"
      />
    </div>
    <div class="addressList">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="delete"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { searchAddressAPI, delAddressAPI, getUser } from "../services/user";
import { getToken } from "../utils/tools";

export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      isSelect: false,
      isEmpty: true,
    };
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
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
    onclick() {
      getUser();
    },
    select(item) {
      if (this.$route.query.select) {
        const product = JSON.parse(this.$route.query.product);
        let user = {
          username: item.name,
          tel: item.tel,
          address: item.address,
        };
        this.$router.replace({
          name: "Order",
          query: {
            product: JSON.stringify(product),
            user: JSON.stringify(user),
          },
        });
        Toast.success("修改地址成功！");
      }
    },
  },
  created() {
    const uid = getToken();
    this.list = searchAddressAPI(uid);
    if (this.list.length > 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  },
};
</script>

<style scoped>
.addresslist_main {
  background-color: #ffc7c7;
}
.empty {
  margin-top: 100px;
}
</style>