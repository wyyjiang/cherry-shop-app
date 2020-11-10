<template>
  <!-- 登录 -->
  <div class="reg">
    <img
      style="width:70%;"
      src="../assets/cherry5.jpg"
      alt=""
    />
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <router-link :to="{ name: 'Reg' }">没有账号,我要注册</router-link>
  </div>
</template>

<script>
import { Notify } from "vant";
import { loginAPI } from "@/services/auth";
import { setToken,getToken} from "@/utils/tools";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values) {
      this.$eventBus.$emit("username",getToken())
      const u = await loginAPI(values);
      if (u.data.code == 1) {
        setToken(u.data.data.id);
        this.$router.push({
          name: "Home",
        });
      } else {
        Notify({
          type: "warning",
          message: u.data.msg,
        });
      }
      console.log(u);
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
