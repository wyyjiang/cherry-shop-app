<template>
  <div class="list">
    <div class="header">
      <van-nav-bar
        class="list_main"
        title="商品详情"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="search" @click="toSearch">
      <van-search v-model="value" placeholder="  搜索" />
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
          @click-thumb="toDetail(item.goods_id)"
        >
          <template #footer>
            <van-button size="mini" @click="toCart(item.goods_id)"
              >加入购物车</van-button
            >
          </template>
        </van-card>
      </van-list>
    </div>
  </div>
</template>
<script>
import { get } from "@/utils/request";
import { getToken } from "@/utils/tools.js";
import { addCartAPI } from "@/services/user.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
      goods: [],
      loading: false, //是否正在加载
      finished: false, //是否加载完成
      pagenum: 1, //页码
      pagesize: 10, // 每页的数量
      allnum: 0, // 商品的总数量
    };
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    toSearch() {
      this.$router.push({
        name: "Search",
      });
    },
    toDetail(item) {
      this.$router.push({
        name: "Detail",
        query: {
          id: item,
        },
      });
    },
    toCart(id) {
      let uid = getToken();
      addCartAPI(uid, id, 1);
      Toast.success("加入购物车成功！");
    },
    onLoad() {
      this.loadData();
    },

    async loadData() {
      var params = {};
      // 判断传入的是关键字还是cid
      if (this.$route.query.query) {
        params = {
          query: this.$route.query.query,
          pagenum: this.pagenum,
          pagesize: this.pagesize,
        };
      } else if (this.$route.query.cid) {
        params = {
          cid: this.$route.query.cid,
          pagenum: this.pagenum,
          pagesize: this.pagesize,
        };
      }
      this.loading = true;
      await get("/api/public/v1/goods/search", params).then((res) => {
        this.goods = [...this.goods, ...res.data.message.goods];
        this.allnum = res.data.message.total;
      });
      this.pagenum++;
      this.loading = false;
      if (this.goods.length >= this.allnum) {
        this.finished = true;
      }
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