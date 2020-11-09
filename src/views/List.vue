<template>
  <div class="header">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-nav-bar :fixed="false" title="商品列表" left-arrow>
        <template #right> </template>
      </van-nav-bar>
      <van-search v-model="value" placeholder="  搜索" />
      <!-- <router-link
        :to="{
          name: 'Detail',
        }"
      >
        <van-card
          v-for="item in goods"
          :key="item.goods_id"
          :price="item.goods_price.toFixed(2)"
          :title="item.goods_name"
          :thumb="item.goods_big_logo | dalImg"
        >
        </van-card>
      </router-link> -->
      <div class="dabox" v-for="item in goods" :key="item.goods_id">
        <div class="box_left">
          <router-link
            :to="{
              name: 'Detail',
              query: {
                id: item.goods_id,
              },
            }"
          >
            <img :src="item.goods_big_logo | dalImg" />
          </router-link>
        </div>
        <div class="box_right">
          <h3>{{ item.goods_name }}</h3>
          <van-rate
            class="start"
            v-model="values"
            allow-half
            void-icon="star"
            void-color="#eee"
          />
          <p>￥{{ item.goods_price.toFixed(2) }}</p>
        </div>
      </div>
    </van-list>
    <router-view />
  </div>
</template>


<script>
import { get } from "@/utils/request";

export default {
  data() {
    return {
      value: "",
      values: 3.5,
      goods: [],
      loading: false, //是否正在加载
      finished: false, //是否加载完成
      // pagenum: 1, //页码
    };
  },
  methods: {
    onLoad() {
      this.loadData();
    },
    async loadData() {
      this.loading = true;
      // this.$route.query.page = this.pagenum;
      await get("/api/public/v1/goods/search").then((res) => {
        this.goods = res.data.message.goods;
        // console.log(this.goods);
      });
      // this.pagenum++;
      this.loading = false;
    },
    // Detail(item) {
    //   console.log(item.goods_id);

    //   location.href = "http://localhost:8080/#/Detail?" + item.goods_id;
    // },
  },
};
</script>

<style scoped>
h1,
h3,
h4,
p {
  padding: 0;
  margin: 0;
}
.van-card {
  font-size: 15px;
  margin-bottom: 25px;
  border-bottom: 2px solid #cecece;
}
.van-card__price {
  color: red;
  font-weight: 700;
}
.dabox {
  flex: 1;
  display: flex;
  margin-top: 1rem;
  height: 10rem;
  padding: 0 1rem;
}
.box_left {
  width: 8rem;
}
.box_left img {
  height: 100%;
}
.box_right {
  height: 10rem;
  overflow: hidden;
  margin-left: 1.3rem;
}
.box_right h3 {
  margin-left: 2rem;
  margin-top: 2rem;
  font-size: 0.8rem;
}
.box_right .start {
  margin-top: 0.5rem;
  margin-left: 2rem;
}
.box_right p {
  font-size: 1.1rem;
  color: red;
  text-indent: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
}
</style>