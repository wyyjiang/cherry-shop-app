<template>
  <div class="user">
    <div class="top">
      <van-nav-bar title="用户个人中心"></van-nav-bar>
    </div>
    <div class="change">
      <div>
        <van-uploader :after-read="afterRead" />
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
      <router-link :to="{ name: 'Change' }">
        <div class="conter">
          <div><i class="el-icon-present"></i><span>修改信息</span></div>
          <i class="el-icon-arrow-right"></i>
        </div>
      </router-link>
      <div class="conter_childer">
        <router-link :to="{ name: 'Service' }">
          <div class="conter">
            <div><i class="el-icon-present"></i><span>收藏商品</span></div>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
        <router-link :to="{ name: 'Service' }">
          <div class="conter">
            <div><i class="el-icon-present"></i><span>客服</span></div>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>

        <router-link :to="{ name: 'AboutUs' }">
          <div class="conter">
            <div><i class="el-icon-present"></i><span>关于我们</span></div>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
      </div>

      <div class="conter">
        <div @click="onclick">
          <i class="el-icon-present"></i><span>退出登录</span>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {  removeToken } from "@/utils/tools.js";
import { getToken } from "@/utils/tools.js";
export default {
  name: "user",
  data() {
    return {
      names: "",
      indexa:[]
    };
  },
  methods: {
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
    this.indexa.push()
    // this.$eventBus.$on("usernames", (e) => {
    //   this.names=e+"w"
    // });
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