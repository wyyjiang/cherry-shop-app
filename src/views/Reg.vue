<template>
  <!-- 注册 -->
  <div class="reg">
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
      <van-field
        v-model="repwd"
        type="password"
        name="repwd"
        label="确认密码"
        placeholder="请再一次密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <router-link :to="{ name: 'Login' }">已有账号,我要登录</router-link>
  </div>
</template>

<script>
import { Notify } from "vant";
// import { regAPI } from "@/services/auth";
import { regAPI } from "@/services/user";
import { setToken } from "@/utils/tools";
// import { setUser } from "@/utils/user";
export default {
  data() {
    return {
      username: "",
      repwd: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.password != this.repwd) {
        Notify({
          type: "warning",
          message: "两次输入的密码不一致",
        });
        return;
      } else {
        if (regAPI(this.username, this.password).code == 0) {
          Notify({
            type: "warning",
            message: regAPI(this.username, this.password).message,
          });
        } else {
          this.$router.push({
            name: "Home",
          });
          setToken(this.username)
        }
      }
    },
  },
};
</script>

<style scoped>
.reg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>