<template>
  <div class="home">
    <div class="header">
      <img src="../assets/cherry-logo.png" alt="" />
      <div>
        <van-icon name="search" />
        搜索商品名称
      </div>
      <van-icon name="user-circle-o" />
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item.goods_id"
          ><img :src="item.image_src" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <van-grid :border="false" :column-num="4" class="nav_grid">
        <van-grid-item v-for="item in navs" :key="item.image_src">
          <van-image :src="item.image_src" />
        </van-grid-item>
      </van-grid>
    </div>
    <div class="floor"></div>
  </div>
</template>

<script>
import { get } from "@/utils/request.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      navs: [],
      floors: [],
    };
  },
  components: {},
  async created() {
    await get("/api/public/v1/home/swiperdata").then((res) => {
      this.banners = res.data.message;
    });
    // console.log(this.banners);
    await get("/api/public/v1/home/catitems").then((res) => {
      this.navs = res.data.message;
    });
    // console.log(this.navs);
    await get("/api/public/v1/home/floordata").then((res) => {
      this.floors = res.data.message;
      console.log(this.floors);
    });
  },
};
</script>
<style scoped>
.home {
  background-color: #f4f4f4;
}
.header {
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header img {
  height: 80%;
}
.header div {
  width: 70%;
  height: 28px;
  border: solid 1px #e5e5e5;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}
.header > div > i {
  font-size: 16px;
  margin: 0 6px;
}
.header > i {
  font-size: 22px;
}
.my-swipe img {
  width: 100%;
}
</style>
