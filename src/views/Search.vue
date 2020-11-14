<template>
  <div class="search">
    <div class="header">
      <van-nav-bar
        class="search_main"
        title="搜索中心"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="search_s">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable
        size="small"
        prefix-icon="el-icon-search"
        @input="searchInput"
      >
      </el-input>
      <el-button type="danger" size="small" @click="toList">搜索</el-button>
    </div>
    <div class="search_result">
      <div
        v-for="item in list"
        :key="item.goods_id"
        @click="toDetail(item.goods_id)"
      >
        <b>{{ item.goods_name }}</b>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/request.js";

export default {
  name: "Search",
  data() {
    return {
      input: "",
      list: [],
      isHover: false,
    };
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    async searchInput() {
      if (!this.input) {
        this.list = [];
      } else {
        await get("/api/public/v1/goods/qsearch", { query: this.input }).then(
          (res) => {
            this.list = res.data.message;
          }
        );
      }
    },
    toDetail(id) {
      this.$router.push({
        name: "Detail",
        query: {
          id,
        },
      });
    },
    toList() {
      if (this.input) {
        this.$router.push({
          name: "List",
          query: {
            query: this.input,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.search_main,
.search_s {
  background-color: #ffc7c7;
}
.search_s {
  padding: 1%;
  display: flex;
  align-items: center;
}
.search {
  display: flex;
  flex-direction: column;
}
.search_result {
  flex: 1;
  overflow-y: auto;
}
.search_result > div {
  /* width: 100%; */
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #838383;
  padding: 0 3%;
}
.search_result > div > b {
  display: block;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: normal;
  font-family: "Hiragino Sans GB";
  font-size: 4vw;
}
.search_result > div > i {
  display: block;
}
</style>