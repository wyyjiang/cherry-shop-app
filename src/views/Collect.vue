<template>
  <div class="collect">
    <div class="header">
      <van-nav-bar
        class="collect_main"
        title="收藏中心"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="content">
      <div class="empty" v-if="isEmpty">
        <van-empty image="error" description="还没有商品哦~快去首页看看吧！">
          <van-button round type="danger" class="bottom-button" @click="toHome"
            >去首页</van-button
          >
        </van-empty>
      </div>
      <div class="noEmpty" v-if="!isEmpty">
        <van-card
          v-for="item in list"
          :key="item.goods_id"
          :price="item.goods_price.toFixed(2)"
          :title="item.goods_name"
          :thumb="item.goods_small_logo"
          @click="toDetail(item.goods_id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getCollectAPI } from "@/services/user.js";
import { getToken } from "@/utils/tools.js";
import { get } from "@/utils/request.js";

export default {
  name: "Collect",
  data() {
    return {
      list: [],
      isEmpty: false,
    };
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    toHome() {
      this.$router.push({ name: "Home" });
    },
    toDetail(id) {
      this.$router.push({
        name: "Detail",
        query: {
          id,
        },
      });
    },
  },
  async created() {
    // 调取用户的收藏列表
    const collect_list = getCollectAPI(getToken());
    // 判断用户的收藏列表是否为空
    if (collect_list.length == 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
    console.log(collect_list);
    // 获取这些数据的商品信息，并添加到list中
    await collect_list.forEach((item) => {
      get("/api/public/v1/goods/detail", { goods_id: item }).then((res) => {
        this.list.push(res.data.message);
      });
    });
    console.log(this.list);
  },
};
</script>

<style scoped>
.collect_main {
  background-color: #ffc7c7;
}
.collect {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.content .van-card {
  margin-top: 1%;
  background-color: #ffffff;
  border-bottom: solid 1px #aaaaaa;
}
.empty {
  margin-top: 25%;
}
.noEmpty {
  padding-top: 2%;
}
</style>