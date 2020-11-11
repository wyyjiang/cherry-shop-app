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
      <van-card
        v-for="item in 6"
        :key="item"
        price="2.00"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Collect",
  data() {
    return {};
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
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
</style>