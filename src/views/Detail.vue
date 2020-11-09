<template>
  <div class="detail">
    <div class="header">
      <van-nav-bar
        class="detail_main"
        title="商品详情"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>

    <div class="content">
      <img class="picture" :src="goods.goods_big_logo" alt="" />
      <h1>
        ￥{{ goods.goods_price }}
        <div class="buy">明天00:00开抢</div>
        <van-count-down :time="time">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </h1>
      <h2>{{ goods.goods_name }}</h2>
      <p>
        【11.11抢先购】大牌来袭，部分商品满400减40！
        领优惠券下单更优惠,快来加购吧！！
      </p>
      <!-- <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      /> -->
      <!-- 优惠券列表 -->
      <!-- <van-popup
        v-model="showList"
        round
        v-show="showList"
        position="bottom"
        style="height: 90%; padding-top: 4px"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup> -->
      <div class="txt">
        <i class="icon_buy"> <img src="../assets/buy.png" alt="" /></i>
        <span>极速审核</span>
        <span>15天价保</span>
        <span>免费上门取退</span>
      </div>
      <div class="serve">
        <p>运费 免运费</p>
        <ul>
          <li class="prc">发货&商家售后</li>
          <li class="prc">7天无理由退货</li>
          <li class="prc">送运费险</li>
          <li class="prc">送货上门</li>
          <li class="prc">部分收货</li>
          <li class="prc">自提</li>
        </ul>
      </div>
    </div>
    <div class="Gouwu">
      <van-goods-action :fixed="false">
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="收藏" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/request.js";
// const coupon = {
//   available: 1,
//   condition: "无使用门槛\n最多优惠12元",
//   reason: "",
//   value: 150,
//   name: "优惠券名称",
//   startAt: 1489104000,
//   endAt: 1514592000,
//   valueDesc: "1.5",
//   unitDesc: "元",
// };

export default {
  data() {
    return {
      goods: {},
      // chosenCoupon: -1,
      // coupons: [coupon],
      // disabledCoupons: [coupon],
      showList: "",
      time: 20 * 60 * 60 * 1000,
    };
  },
  components: {},
  async created() {
    const res = await get(
      "/api/public/v1/goods/detail?goods_id=" + this.$route.query.id
    );
    this.goods = res.data.message;
    console.log(this.goods);
    console.log(this.goods.goods_id);
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    // onExchange(coupon) {
    //   this.coupons.push(coupon);
    // },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.detail {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.Gouwu .van-goods-action {
  position: static;
}
.detail_main {
  background-color: #ffc7c7;
}
.van-overflow-hidden {
  overflow: hidden;
}
.content .picture {
  width: 95%;
  height: 18.5rem;
  margin-left: 0.4rem;
}
.content h2 {
  font-size: 17px;
  color: rgb(19, 18, 18);
  font-weight: 700;
  margin: 0.5rem;
}
.content h1 {
  /* margin: 0.5rem; */
  color: rgb(252, 250, 250);
  /* font-weight: 700; */
  font-size: 18px;
  background: #26a96d;
  padding: 0.6rem;
  /* line-height: 60px; */
  /* height: 60px; */
}
.picture1 {
  width: 100%;
  height: 100%;
}
p {
  color: #666;
  position: relative;
  font-size: 12px;
  overflow: hidden;
  padding: 0.3rem;
}
.txt {
  background: #ffe4e4;
  padding: 0.8rem;
}
.icon_buy img {
  width: 70px;
  height: 13px;
  line-height: 13px;
}
span {
  flex: 1;
  overflow: hidden;
  margin: 0 0.3rem;
  font-size: 0.9rem;
  color: #e93b3d;
}
.buy {
  font-size: 0.6rem;
  color: red;
  margin-left: 10.6rem;
  display: inline-block;
  margin-top: -13px;
}

.van-count-down {
  margin-top: 5px;
  margin-left: 215px;
  display: inline-block;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #664347;
}
.serve {
  background-color: rgb(253, 250, 244);
  border-radius: 10px;
}
ul li {
  padding: 5px;
  display: inline-block;
  line-height: 1;
  color: #8c8c8c;
  font-size: 0.8rem;
}
</style>  
