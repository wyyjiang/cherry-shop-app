<template>
  <!-- 登录 -->
  <div class="login">
    <div class="top">
      <van-nav-bar
        class="login_main"
        title="登录"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="login_content">
      <img style="width: 70%" src="../assets/cherry5.jpg" alt="" />
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="userName"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      <router-link :to="{ name: 'Reg' }" class="a_color">没有账号,我要注册</router-link>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { setToken } from "@/utils/tools";
import { loginAPI } from "@/services/user";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      const u = loginAPI(this.username, this.password);
      if (u.code == 1) {
        setToken(this.username);
        this.$router.push({
          name: "Home",
        });
      } else {
        Notify({
          type: "warning",
          message: u.message,
        });
      }
    },
    returnRef() {
      history.back(-1);
    },
  },
};
</script>

<style scoped>
.login_main {
  background-color: #ffc7c7;
}
.login {
  display: flex;
  flex-direction: column;
}
.login_content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.a_color{
  color: darkslategrey;
}
</style>
