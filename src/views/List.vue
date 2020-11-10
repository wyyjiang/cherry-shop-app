<template>
  <div class="list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="header">
        <van-nav-bar
          class="detail_main"
          title="商品详情"
          left-arrow
          @click-left="returnRef"
        ></van-nav-bar>
      </div>
      <div class="search" @click="toSearch">
        <van-search
          v-model="value"
          placeholder="  搜索"
          @click-left="returnRef"
        />
      </div>

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

      <van-card
        v-for="item in goods"
        :key="item.goods_id"
        :price="item.goods_price.toFixed(2)"
        desc="描述信息"
        :title="item.goods_name"
        :thumb="item.goods_big_logo | dalImg"
        @click="toDetail(item.goods_id)"
      >
        <template #footer>
          <van-button size="mini">加入购物车</van-button>
        </template>
      </van-card>

      <!-- <div class="dabox
      " v-for="item in goods" :key="item.goods_id">
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
          <p>￥{{ item.goods_price.toFixed(2) }}</p>
          <van-button type="danger">加入购物车</van-button>
        </div>
      </div> -->
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
      // values: 3.5,
      goods: [],
      loading: false, //是否正在加载
      finished: false, //是否加载完成
      pagenum: 1, //页码
    };
  },
  methods: {
    toSearch() {
      this.$router.push({
        name: "Search",
      });
    },
    returnRef() {
      history.back(-1);
    },
    onLoad() {
      // console.log("开始加载");
      this.loadData();
    },
    toDetail(item) {
      this.$router.push({
        name: "Detail",
        query: {
          id: item,
        },
      });
    },
    async loadData() {
      var params = {};
      if (this.$route.query.query) {
        params = { query: this.$route.query.query };
      } else if (this.$route.query.cid) {
        params = { cid: this.$route.query.cid };
      }
      console.log(params);
      this.loading = true;
      this.$route.query.page = this.pagenum;
      await get("/api/public/v1/goods/search", params).then((res) => {
        this.goods = [...this.goods, ...res.data.message.goods];
        // console.log(this.goods);
      });
      this.pagenum++;
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
.list_main {
  background-color: #ffc7c7;
}
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
  height: 11rem;
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
  margin-left: 1rem;
}
.header {
  /* position: relative; */
}
.van-button--normal {
  padding: 0 9px;
  margin-left: 100px;
}
.van-button {
  height: 33px;
}
.van-button {
  background: red;
  color: white;
}
</style>