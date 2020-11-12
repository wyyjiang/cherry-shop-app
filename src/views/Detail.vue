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
      <img class="picture" :src="goods.goods_big_logo | dalImg" alt="" />
      <div class="content_header">
        <div class="content_left">￥{{ goods.goods_price.toFixed(2) }}</div>
        <div class="content_right">促销中</div>
      </div>
      <van-notice-bar
        left-icon="volume-o"
        text="双11特卖，大牌来袭，买400减40，蓄力待发，双十一我们来了！ 一年如一日，勇攀销量顶峰。 备战六个月，只为双十一。 今天很残酷，明天更残酷，但双十一很美好。"
      />
      <h2>{{ goods.goods_name }}</h2>
      <p>
        【11.11抢先购】大牌来袭，部分商品满400减40！
        领优惠券下单更优惠,快来加购吧！！
      </p>
      <div class="txt">
        <i class="icon_buy"> <img src="../assets/buy.png" alt="" /></i>
        <span>极速审核</span>
        <span>15天价保</span>
        <span>免费上门取退</span>
      </div>
      <div class="serve">
        <div>运费： 免运费</div>
        <ul>
          <li class="prc">发货&商家售后</li>
          <li class="prc">7天无理由退货</li>
          <li class="prc">送运费险</li>
          <li class="prc">送货上门</li>
          <li class="prc">部分收货</li>
          <li class="prc">自提</li>
        </ul>
      </div>
      <div class="info">
        <div class="p_detail">图文详情</div>
        <div class="p_introduce">
          <div class="p_introduce_main"></div>
        </div>
      </div>
    </div>
    <div class="Gouwu">
      <van-goods-action :fixed="false">
        <van-goods-action-icon
          icon="chat-o"
          text="客服"
          color="#07c160"
          @click="toChat"
        />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart" />
        <van-goods-action-icon
          @click="toCollect"
          icon="star"
          :text="isCollected ? '已收藏' : '收藏'"
          :color="isCollected ? '#ff5000' : '#323233'"
        />
        <van-goods-action-button
          @click="addProduct"
          type="warning"
          text="加入购物车"
        />
        <van-goods-action-button
          @click="buyProduct"
          type="danger"
          text="立即购买"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { get } from "@/utils/request.js";
import { addCartAPI, getCollectAPI, collectAPI } from "@/services/user.js";
import { getToken, isLogined } from "@/utils/tools.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      goods: { goods_price: 1 },
      list: "",
      showList: "",
      isCollected: false,
    };
  },
  components: {},
  async created() {
    if (isLogined()) {
      // 判断此商品是否收藏
      let like = getCollectAPI(getToken());
      if (like.indexOf(parseInt(this.$route.query.id)) > -1) {
        this.isCollected = true;
      } else {
        this.isCollected = false;
      }
    }
    // 商品信息
    const res = await get(
      "/api/public/v1/goods/detail?goods_id=" + this.$route.query.id
    );
    this.goods = res.data.message;
    // 商品介绍
    const res1 = await get(
      "/api/public/v1/goods/detail?goods_id=" + this.$route.query.id
    );
    this.list = res1.data.message.goods_introduce;
    var product_text = document.querySelector(".p_introduce_main");
    product_text.innerHTML = this.list;
  },

  methods: {
    returnRef() {
      history.back(-1);
    },
    toCart() {
      if (isLogined()) {
        this.$router.push({
          name: "Cart",
        });
      } else {
        Toast.fail("请先登录！");
        this.$router.push({ name: "Login" });
      }
    },
    toChat() {
      this.$router.push({
        name: "Chat",
      });
    },
    addProduct() {
      if (isLogined()) {
        Toast.success("加入购物车成功！");
        addCartAPI(getToken(), this.$route.query.id, 1);
      } else {
        Toast.fail("加入购物车失败，请先登录！");
        this.$router.push({ name: "Login" });
      }
    },
    buyProduct() {
      if (isLogined()) {
        let product = [
          {
            id: this.$route.query.id,
            num: 1,
            img: this.goods.goods_small_logo,
            title: this.goods.goods_name,
            price: this.goods.goods_price.toFixed(2),
          },
        ];
        this.$router.push({
          name: "Order",
          query: { product: JSON.stringify(product) },
        });
      } else {
        Toast.fail("购买失败！");
        this.$router.push({ name: "Login" });
      }
    },
    toCollect() {
      if (isLogined()) {
        const c = collectAPI(getToken(), parseInt(this.$route.query.id));
        if (c.code == 1) {
          Toast.success(c.message);
          this.isCollected = true;
        } else {
          Toast({
            icon: "cross",
            message: c.message,
          });
          this.isCollected = false;
        }
      } else {
        Toast.fail("加入收藏失败！");
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>
<style scoped>
.info {
  background: #fbe6d4;
  border-radius: 15px;
  margin-top: 0.5rem;
}
.p_detail {
  font-size: 1.5rem;
  color: #e93b3d;
  padding-left: 1rem;
  padding-top: 1rem;
}
.detail {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
  background: #fcf1f1;
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
  width: 94%;
  height: 58%;
  margin-left: 0.7rem;
}
.content h2 {
  font-size: 17px;
  color: rgb(19, 18, 18);
  font-weight: 700;
  margin: 0.5rem;
}
.content_header {
  height: 40px;
  font-size: 18px;
  padding: 0.6rem;
  display: flex;
  margin: 0.2rem 0;
  display: flex;
}
.content_left {
  color: red;
  font-size: 1.7rem;
  display: inline-block;
  /* line-height: 60px; */
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
  margin-right: 1rem;
}
span {
  flex: 1;
  overflow: hidden;
  margin: 0 0.3rem;
  font-size: 0.9rem;
  color: #e93b3d;
}
.content_right {
  font-size: 0.6rem;
  color: #cecece;
  /* line-height: 72px; */
  margin-left: 0.6rem;
  margin-top: 0.8rem;
  display: inline;
  margin-bottom: 15px;
}

.van-count-down {
  display: inline;
  margin-top: 15px;
  margin-left: 160px;
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
  background-color: rgb(255, 249, 236);
  border-radius: 13px;
  margin-top: 0.5rem;
}
.serve div {
  margin-left: 1rem;
  font-size: 0.8rem;
  padding: 0.5rem 0;
  color: #aaa;
}
.serve ul {
  margin-left: 1rem;
}
.serve ul li {
  margin-right: 1rem;
  padding: 0.4rem 0;
  display: inline-block;
  line-height: 1;
  color: #aaaaaa;
  font-weight: bold;
  font-size: 0.7rem;
}
</style>
