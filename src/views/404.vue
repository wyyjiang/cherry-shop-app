<template>
  <div class="error">
    <img src="../assets/404.png" />
    <p>抱歉，您访问的页面出错了</p>
    <h1>您可能输错了网址，或该网页已删除或不存在</h1>
    <van-button type="info" route :to="{ name: 'Home' }">返回首页</van-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error p {
  /* font-size: 20px; */
  text-align: center;
  font-weight: bolder;
}
.error h1 {
  font-size: 12px;
  text-align: center;
  color: rgb(77, 75, 75);
}
.error img {
  width: 70%;
  height: 25%;
  margin: 140px 50px 0;
}
.error .van-button {
  margin: 20px 140px;
}
</style>
