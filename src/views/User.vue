<template>
  <div class="user">
    <div class="top">
      <van-nav-bar title="用户个人中心"></van-nav-bar>
    </div>
    <div class="change">
      <div>
        <img src="../assets/logo.png" alt="" />
        <div class="change_name">
          <div>SHI</div>
          <div><span>微信号:</span><span>shi10695288</span></div>
        </div>
      </div>
      <div>
        <i class="el-icon-edit">修改信息</i><i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="big_conter">
      <div class="conter">
        <div><i class="el-icon-present"></i><span>收藏商品</span></div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="conter_childer">
        <div class="conter">
          <div><i class="el-icon-present"></i><span>待付款</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="conter">
          <div><i class="el-icon-present"></i><span>全部订单</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="conter">
          <div><i class="el-icon-present"></i><span>收获地址管理</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
         <div class="conter">
          <div><i class="el-icon-present"></i><span>关于我们</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      
      <div class="conter">
        <div><i class="el-icon-present"></i><span>退出登录</span></div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user {
  background: rgb(243, 243, 243);
}
.change {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  border-bottom: 1px solid #f5f3f3;
}
.change img {
  width: 50px;
  height: 50px;
}
.change > div {
  display: flex;
}
.change_name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.conter {
  height: 40px;
  background: #fff;
  border-bottom: 1px solid #f5f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 5px 0;
}
.conter_childer .conter {
  margin: 0;
}
.conter div span {
  font-size: 15px;
}
.conter div i {
  display: inline-block;
  margin-right: 6px;
}
</style>