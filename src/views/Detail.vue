<template>
  <div class="detail">
    <router-link route :to="{ name: 'List' }"
      ><van-nav-bar title="商品详情" left-arrow>
        <template #right> </template> </van-nav-bar
    ></router-link>
    <!-- <van-card
      num="1"
      :price="goods.goods_price"
      :desc="goods.goods_name"
      title="商品标题"
      :thumb="goods.goods_big_logo"
    >
    </van-card> -->
    <div class="content">
      <img class="picture" :src="goods.goods_big_logo" alt="" />
      <img
        class="picture1"
        src="//img12.360buyimg.com/img/s737x100_jfs/t1/122490/33/15636/63606/5f8cfff8E0bbc7960/5c6abc769f2204d6.png.webp"
        alt=""
      />
      <h1>￥{{ goods.goods_price }}</h1>
      <h2>{{ goods.goods_name }}</h2>
      <p>【11.11抢先购】大牌来袭，部分商品满400减40！ 领优惠券下单更优惠</p>
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup
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
      </van-popup>
    </div>
    <div class="Gouwu">
      <van-goods-action style="position: static">
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/request.js";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

export default {
  data() {
    return {
      goods: {},
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: "",
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
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(coupon) {
      this.coupons.push(coupon);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.content {
  padding: 0.5rem;
}
.content .picture {
  width: 100%;
  height: 17.5rem;
}
.content h2 {
  font-size: 17px;
  color: rgb(19, 18, 18);
  font-weight: 700;
  margin: 0.5rem;
}
.content h1 {
  margin: 0.5rem;
  color: red;
  font-weight: 700;
  font-size: 25px;
}
.picture1 {
  width: 100%;
  height: 100%;
}
p {
  color: #666;
  /* padding: 18px 0 0; */
  /* line-height: 1.3; */
  position: relative;
  font-size: 12px;
  /* max-height: 46px; */
  overflow: hidden;
}
</style>