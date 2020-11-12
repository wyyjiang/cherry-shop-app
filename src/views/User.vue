<template>
  <div class="user">
    <div class="top">
      <van-nav-bar title="个人中心"></van-nav-bar>
    </div>
    <div class="change">
      <div>
        <!-- <van-uploader :after-read="afterRead" /> -->
        <div>
          <el-avatar
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2116474643,2614414860&fm=26&gp=0.jpg"
          ></el-avatar>
        </div>
        <div class="change_name">
          <div class="change_conter">
            <div>账号：{{ names }}</div>
            <div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="big_conter">
      <div class="conter" @click="toChangePassword">
        <div><i class="el-icon-lock"></i><span>修改密码</span></div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="conter_childer">
        <div class="conter" @click="toAddress">
          <div>
            <i class="el-icon-location-information"></i
            ><span>收货地址管理</span>
          </div>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="conter" @click="toCollect">
          <div><i class="el-icon-collection"></i><span>我的收藏</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="conter" @click="toCollect">
          <div>
            <i class="el-icon-shopping-cart-full"></i><span>我的订单</span>
          </div>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="conter" @click="toService">
          <div><i class="el-icon-service"></i><span>我的客服</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="conter" @click="toAboutUs">
          <div><i class="el-icon-user"></i><span>关于我们</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="conter">
        <div @click="onclick">
          <i class="el-icon-switch-button"></i><span>退出登录</span>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { removeToken } from "@/utils/tools.js";
import { getToken } from "@/utils/tools.js";
export default {
  name: "user",
  data() {
    return {
      names: "",
      list: [],
    };
  },
  methods: {
    toChangePassword() {
      this.$router.push({ name: "ChangePassword" });
    },
    toCollect() {
      this.$router.push({ name: "Collect" });
    },
    toAddress() {
      this.$router.push({ name: "AddressList" });
    },
    toService() {
      this.$router.push({ name: "Service" });
    },
    toAboutUs() {
      this.$router.push({ name: "About" });
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      console.log(2);
    },
    onclick() {
      removeToken();
      this.$router.push({
        name: "Login",
      });
    },
  },
  created() {
    this.names = getToken();
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #ffc7c7;
}
.user {
  background: rgb(243, 243, 243);
}
.change {
  background: #fff;
  padding: 5px 15px;
  margin-top: 6px;
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
  margin-left: 10px;
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
.el-avatar {
  width: 70px;
  height: 70px;
}
</style>