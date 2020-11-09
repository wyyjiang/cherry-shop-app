<template>
  <div class="classify">
    <div class="header">
      <van-nav-bar class="header_main" title="商品分类"></van-nav-bar>
    </div>
    <div class="search">
      <div class="search_input" @click="toSearch">
        <van-icon name="search" />
        搜索
      </div>
    </div>
    <div class="classify_content">
      <div class="classify_content_left">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            :title="item.cat_name"
            v-for="item in classifys"
            :key="item.cat_id"
          />
        </van-sidebar>
      </div>
      <div class="classify_content_right">
        <div
          class="classify_item"
          v-for="item in classifys[activeKey].children"
          :key="item.cat_id"
        >
          <van-divider
            :style="{
              color: '#838383',
              borderColor: '#ad9d9d',
              padding: '0 16px',
            }"
            >{{ item.cat_name }}</van-divider
          >
          <van-grid :column-num="3">
            <van-grid-item
              v-for="icon in item.children"
              :key="icon.cat_id"
              :icon="icon.cat_icon"
              :text="icon.cat_name"
            />
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/request.js";

export default {
  name: "Classify",
  data() {
    return {
      classifys: [{ children: {} }],
      activeKey: 0,
    };
  },
  methods: {
    toSearch() {
      location.href = "http://localhost:8080/#/search";
    },
    onChange() {
    },
  },
  async created() {
    await get("/api/public/v1/categories").then((res) => {
      this.classifys = res.data.message;
    });
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
.header_main,
.search {
  background-color: #ffc7c7;
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
  border: solid 1px #ffe2e2;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  border-radius: 6px;
}
.classify {
  display: flex;
  flex-direction: column;
}
.classify_content {
  display: flex;
  overflow-y: hidden;
  flex: 1;
}
.classify_content_left {
  overflow-y: auto;
}
.classify_content_right {
  flex: 1;
  overflow-y: auto;
}
</style>