<template>
  <div id="app">
    <router-view class="content" />
    <van-tabbar
      v-if="
        this.$route.path == '/' ||
        this.$route.path == '/classify' ||
        this.$route.path == '/cart' ||
        this.$route.path == '/user'
      "
      :fixed="false"
      route
      v-model="active"
      active-color="deeppink"
    >
      <van-tabbar-item icon="wap-home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="apps-o" :to="{ name: 'Classify' }"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" :to="{ name: 'User' }"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0, // 默认选中的是0
    };
  },
};
</script>

<style>
body,
html {
  height: 100%;
}
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
  overflow-x: hidden;
}
</style>
