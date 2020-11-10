<template>
  <div class="list">
    <div class="header">
      <van-nav-bar
        class="list_main"
        title="商品列表"
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
    <div class="list_content">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-card
          v-for="item in goods"
          :key="item.goods_id"
          :price="item.goods_price.toFixed(2)"
          :title="item.goods_name"
          :thumb="item.goods_big_logo | dalImg"
          @click="toDetail(item.goods_id)"
        >
          <template #footer>
            <van-button size="mini" @click="toCart">加入购物车</van-button>
          </template>
        </van-card>
      </van-list>
    </div>
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
    toSearch() {
      this.$router.push({
        name: "Search",
      });
    },
    toCart(e) {
      var evt = e || event;
      // 阻止冒泡的兼容性写法
      if (evt.stopPropagation) {
        evt.stopPropagation();
      } else {
        evt.cancelBubble = true;
      }
      console.log("加入购物车成功！");
    },
    returnRef() {
      history.back(-1);
    },
    onLoad() {
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
      await get("/api/public/v1/goods/search", params).then((res) => {
        this.goods = res.data.message.goods;
      });
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.list_main,
.van-search {
  background-color: #ffc7c7;
}
.list {
  display: flex;
  flex-direction: column;
}
.list_content {
  flex: 1;
  overflow-y: auto;
}
.van-search__content {
  background-color: #fff;
}
.van-card {
  font-size: 15px;
  border-bottom: 2px solid #cecece;
}
.van-card__price {
  color: red;
  font-weight: 700;
}
.van-button {
  height: 33px;
}
.van-button {
  background: red;
  color: white;
}
</style>