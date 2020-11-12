<template>
  <div class="detail">
    <div class="header">
      <van-nav-bar
        class="detail_main"
        title="订单查询"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div :class="isEmpty ? '' : 'detail_content'">
      <div class="empty" v-if="isEmpty">
        <van-empty description="还没有订单哦~快去首页看看吧！">
          <van-button round type="danger" class="bottom-button" @click="toHome">
            回到首页
          </van-button>
        </van-empty>
      </div>
      <div class="noempty" v-if="!isEmpty">
        <div class="item" v-for="item in orders" :key="item.orderID">
          <span class="item_time">下单时间：{{ item.time }}</span>
          <van-card
            :num="pro.num"
            :price="pro.price"
            :title="pro.title"
            :thumb="pro.img"
            @click-thumb="toDetail(pro.id)"
            v-for="pro in item.product"
            :key="pro.id"
          />
          <div class="footer_order">
            <div class="order_time">订单编号：{{ item.orderID }}</div>
            <div class="order_price">
              合计：￥{{ (item.price / 100).toFixed(2) }}
            </div>
          </div>
          <div class="footer_user">
            <div class="userinformation">收货信息</div>
            <div class="username">收货人：{{ item.address.username }}</div>
            <div class="usertelphone">电话：{{ item.address.tel }}</div>
            <div class="useraddress">收货地址：{{ item.address.address }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchOrderAPI } from "@/services/user.js";
import { getToken } from "@/utils/tools.js";

export default {
  data() {
    return {
      orders: {},
      isEmpty: true,
    };
  },
  created() {
    this.orders = searchOrderAPI(getToken());
    if (Object.keys(this.orders).length > 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    toDetail(id) {
      this.$router.push({ name: "Detail", query: { id } });
    },
    toHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
.detail {
  display: flex;
  flex-direction: column;
}
.detail_main {
  background-color: #ffc7c7;
}
.detail_content {
  flex: 1;
  overflow-y: auto;
  background: #f5f5f5;
}
.empty {
  margin-top: 50px;
}
.van-card {
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px 0;
}
.item {
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px;
}
.item_time {
  display: block;
  font-size: 13px;
  padding: 10px 15px 0;
  color: #373a40;
}
.footer_order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 15px;
  font-size: 13px;
  color: #373a40;
}
.order_price {
  font-size: 16px;
  font-weight: bold;
  color: #af2d2d;
}
.footer_user {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 5px 15px 10px;
  font-size: 12px;
}
.userinformation {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #646464;
}
.username,
.usertelphone,
.useraddress {
  color: #838383;
}
</style>