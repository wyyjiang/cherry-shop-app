<template>
  <div class="user">
    <div class="top">
      <van-nav-bar title="用户个人中心"></van-nav-bar>
    </div>
    <div class="change">
      <div>
        <van-uploader :after-read="afterRead" />
        <div class="change_name">
          <div>SHI</div>
          <div class="change_conter">
            <div><span>微信号:</span><span>三角形</span></div>
            <div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="big_conter">
      <router-link :to="{ name: 'addressEdit' }">
        <div class="conter">
          <div><i class="el-icon-present"></i><span>修改信息</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
      </router-link>
      <div class="conter_childer">
        <router-link :to="{ name: 'addressEdit' }">
          <div class="conter">
            <div><i class="el-icon-present"></i><span>收藏商品</span></div>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
        <router-link :to="{ name: 'addressList' }">
          <div class="conter">
            <div><i class="el-icon-present"></i><span>收获地址管理</span></div>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>

        <router-link :to="{ name: 'addressEdit' }">
          <div class="conter">
            <div><i class="el-icon-present"></i><span>关于我们</span></div>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
      </div>

      <router-link :to="{ name: 'addressEdit' }">
        <div class="conter">
          <div><i class="el-icon-present"></i><span>退出登录</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
};
</script>

<style scoped>
.user {
  background: rgb(243, 243, 243);
}
.change {
  background: #fff;
  padding: 5px 15px;
  border-bottom: 1px solid #f5f3f3;
}
.change img {
  width: 50px;
  height: 50px;
}
.change div {
  display: flex;
}
.change_name {
  flex: 1;
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
.change_conter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>