<template>
  <div class="home">
    <div class="header">
      <div class="header_main">Cherry商城</div>
      <van-icon name="user-circle-o" @click="toUser" />
    </div>
    <div class="search">
      <div class="search_input" @click="toSearch">
        <van-icon name="search" />
        搜索
      </div>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item.goods_id"
          ><img @click="toDetail(item.goods_id)" :src="item.image_src" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <van-grid :border="false" :column-num="4" class="nav_grid">
        <van-grid-item
          v-for="item in navs"
          :key="item.image_src"
          @click="toClassify"
        >
          <van-image :src="item.image_src" />
        </van-grid-item>
      </van-grid>
    </div>
    <div class="floor">
      <div
        class="floor_item"
        v-for="item in floors"
        :key="item.floor_title.image_src"
      >
        <img :src="item.floor_title.image_src" alt="" />
        <div class="floor_item_pic">
          <div class="floor_item_pic_left">
            <img :src="item.product_list[0].image_src" alt="" />
          </div>
          <div class="floor_item_pic_right">
            <img
              @click="toList(item.product_list[1].name)"
              :src="item.product_list[1].image_src"
              alt=""
            />
            <img
              @click="toList(item.product_list[2].name)"
              :src="item.product_list[2].image_src"
              alt=""
            />
            <img
              @click="toList(item.product_list[3].name)"
              :src="item.product_list[3].image_src"
              alt=""
            />
            <img
              @click="toList(item.product_list[4].name)"
              :src="item.product_list[4].image_src"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
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
  methods: {
    toUser() {
      this.$router.push({
        name: "User",
      });
    },
    toSearch() {
      this.$router.push({
        name: "Search",
      });
    },
    toClassify() {
      this.$router.push({
        name: "Classify",
      });
    },
    toList(name) {
      if (
        name == "春季热门" ||
        name == "爆款清仓" ||
        name == "倒春寒" ||
        name == "怦然心动"
      ) {
        name = "衣服";
      } else if (name == "超强手套") {
        name = "手套";
      } else if (name == "冲锋衣系列") {
        name = "冲锋衣";
      } else if (name == "户外登山包") {
        name = "登山包";
      } else if (name == "户外运动鞋") {
        name = "运动鞋";
      } else if (name == "复古胸针") {
        name = "胸针";
      } else if (name == "韩版手链") {
        name = "手链";
      }
      this.$router.push({
        name: "List",
        query: {
          query: name,
        },
      });
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
    });
  },
};
</script>
<style scoped>
.home {
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
}
.header {
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header_main {
  font-size: 5vw;
  font-family: Tahoma, Helvetica, Arial, "宋体", sans-serif;
  font-weight: bold;
  color: #31326f;
}
.header > i {
  position: absolute;
  right: 0;
  font-size: 8vw;
  color: #ff9a8c;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1vw;
}
.search_input {
  width: 95%;
  padding: 0.6vw 0;
  border: solid 1px #fcdada;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  border-radius: 6px;
}
.my-swipe img {
  width: 100%;
}
.floor_item {
  margin: 10px 0;
}
.floor_item > img {
  display: block;
}
.floor_item_pic {
  background-color: #ffffff;
  display: flex;
  margin: 0px 2%;
}
.floor_item_pic_left {
  width: 34%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.floor_item_pic_right {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
.floor_item_pic_left > img {
  width: 95%;
  height: 90%;
}
.floor_item_pic_right > img {
  width: 47%;
  height: 44%;
  margin: 2px;
}
</style>
