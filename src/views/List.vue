<template>
  <div class="header">
    <van-nav-bar :fixed="false" title="商品列表" left-text="返回" left-arrow>
      <template #right> </template>
    </van-nav-bar>
    <van-search v-model="value" placeholder="  搜索" />
    <van-card
      v-for="item in goods"
      :key="item.goods_id"
      :price="item.goods_price.toFixed(2)"
      :title="item.goods_name"
      :thumb="item.goods_big_logo | dalImg"
    />
  </div>
</template>


<script>
import { get } from "@/utils/request";

export default {
  data() {
    return {
      value: "",
      goods: [],
    };
  },
  async created() {
    await get("/api/public/v1/goods/search").then((res) => {
      this.goods = res.data.message.goods;
      console.log(this.goods);
    });
  },
};
</script>

<style scoped>
.van-card {
  font-size: 15px;
  margin-bottom: 25px;
  border-bottom: 2px solid #cecece;
}
.van-card__price {
  color: red;
  font-weight: 700;
}
</style>