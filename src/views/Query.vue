<template>
  <div class="detail">
    <div class="header">
      <van-nav-bar
        class="detail_main"
        title="查询订单"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="content">
      <div class="content_main">
        <div class="time">
          <div class="date">下单时间：{{}} 物流信息</div>
        </div>
        <van-card
          v-for="item in 6"
          :key="item"
          num="2"
          :price="item.goods_price"
          desc="描述信息"
          :title="item.goods_name"
          :thumb="item.goods_small_logo"
        >
          <!-- <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template> -->
          <template #footer>
            <div class="goods">
              <div class="pro">共计{{ item.total_count }}件商品</div>
            </div>
            <div class="goods1">
              <div class="num">订单编号：{{ item.order_number }}</div>

              <div class="sum">合计：￥{{ item.total_prices }}</div>
            </div>
          </template>
        </van-card>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/request.js";
export default {
  data() {
    return {
      // nowTime: "",
      goods: {},
    };
  },
  async created() {
    const res = await get(
      "/api/public/v1/my/orders/all?goods_id=" + this.$route.query.id
    );
    this.goods = res.data.message.orders.goods;
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    // getTime() {
    //   setInterval(() => {
    //     //new Date() new一个data对象，当前日期和时间
    //     //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
    //     this.nowtime = new Date().toLocaleString();
    //   }, 1000);
    // },
  },
  // created() {
  //   this.getTime();
  // },
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
.content {
  background: #f5f5f5;
}
.content_main {
  border-radius: 10px;
}
.van-card {
  border-radius: 10px;
  margin: 6px;
}
.van-card__price {
  color: tomato;
}
.goods {
  display: flex;
}
.pro {
  font-size: 14px;
  color: #2b2828;
  margin-top: 10px;
}
.num {
  font-size: 13px;
}
.sum {
  color: red;
  font-size: 16px;
}
.goods1 {
  margin: 10px;
  display: flex;
  justify-content: space-between;
}
</style>