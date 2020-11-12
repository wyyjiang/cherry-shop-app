<template>
  <div class="order">
    <div class="top">
      <van-nav-bar
        class="order_main"
        title="确认订单"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="order_content">
      <div class="order_content_main">
        <div class="address">
          <div class="address_left">
            <i class="el-icon-location icon_left"></i>
          </div>
          <div class="address_middle">
            <div class="address_middle_top">
              <i class="address_username">{{ user.username }}</i>
              <i class="address_telphone">{{ user.tel }}</i>
            </div>
            <div class="address_middle_bottom">{{ user.address }}</div>
          </div>
          <div class="address_right" @click="toAddressList">
            <i class="el-icon-arrow-right icon_right"></i>
          </div>
        </div>
        <div class="product">
          <div class="product_produce">
            <van-icon
              class="product_icon"
              name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1439821294,11327642&fm=26&gp=0.jpg"
            />
            Cherry商城
          </div>
          <div class="product_item" v-for="item in list" :key="item.id">
            <van-card
              :num="item.num"
              :price="item.price"
              :title="item.title"
              :thumb="item.img | dalImg"
            >
            </van-card>
          </div>
        </div>
      </div>
      <div class="submit">
        <van-submit-bar
          :price="sum"
          button-text="提交订单"
          @submit="onSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { addOrderAPI, searchCartAPI, deleteCartAPI } from "../services/user.js";
import { getToken } from "../utils/tools.js";

export default {
  name: "Order",
  data() {
    return {
      list: [],
      sum: 0,
      user: {
        username: "姜姜",
        tel: "15136429343",
        address: "河南省郑州市金水区小铺新区",
      },
    };
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    onSubmit() {
      let product = []; // 购物车里的商品id
      this.list.forEach((item) => {
        product.push(parseInt(item.id));
      });
      let carts = searchCartAPI(getToken());
      for (let item in carts) {
        if (product.indexOf(parseInt(item)) > -1) {
          deleteCartAPI(getToken(), item);
        }
      }
      addOrderAPI(getToken(), this.user, this.list, this.sum);
      Toast.success("购买成功！");
      this.$router.replace({ name: "Home" });
    },
    toAddressList() {
      this.$router.push({
        name: "AddressList",
        query: { select: true, product: JSON.stringify(this.list) },
      });
    },
  },
  async created() {
    let product = JSON.parse(this.$route.query.product);
    this.list = product;
    this.list.forEach((item) => {
      this.sum += item.num * item.price * 100;
    });
    if (this.$route.query.user) {
      this.user = JSON.parse(this.$route.query.user);
    }
  },
};
</script>

<style>
.order_main {
  background-color: #ffc7c7;
}
.order {
  display: flex;
  flex-direction: column;
}
.order_content {
  flex: 1;
  overflow-y: auto;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;
}
.order_content_main {
  flex: 1;
  overflow-y: auto;
}
.van-submit-bar {
  position: static;
}
.address {
  background-color: #ffffff;
  height: 100px;
  border-radius: 10px;
  margin: 3% 4%;
  display: flex;
  align-items: center;
}
.product {
  border-radius: 10px;
  margin: 3% 4%;
  background-color: #ffffff;
  padding-bottom: 20px;
}
.product_item {
  height: 100px;
}
.address_middle {
  flex: 1;
  margin: 0 10px;
}
.icon_left {
  padding-left: 10px;
  font-size: 35px;
  color: orange;
}
.icon_right {
  padding-right: 10px;
  color: #cecece;
}
.address_username,
.address_telphone {
  font-style: normal;
}
.address_telphone {
  font-size: 11px;
  padding-left: 10px;
  color: #999999;
}
.address_middle_bottom {
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 5px;
}
.product_produce {
  padding: 3%;
  display: flex;
  align-items: center;
  color: #1c2b2d;
  font-size: 15px;
}
.product_icon {
  margin: 0 6px;
}
.van-card {
  background-color: #ffffff;
}
</style>