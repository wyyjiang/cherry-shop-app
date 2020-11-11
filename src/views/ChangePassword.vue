<template>
  <!-- 注册 -->
  <div>
    <div>
      <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="reg">
      <img style="width: 70%" src="../assets/cherry5.jpg" alt="" />
      <van-form @submit="onSubmit">
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
          label="新密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="repwds"
          type="password"
          name="repwds"
          label="确认新密码"
          placeholder="请再一次密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
// import { regAPI } from "@/services/auth";
import { getToken } from "@/utils/tools";
import { changePasswordAPI } from "@/services/user";
export default {
  data() {
    return {
      repwd: "",
      repwds: "",
      password: "",
    };
  },
  methods: {
    onClickLeft() {
      history.back(-1);
    },
    onSubmit() {
      if (this.repwd != this.repwds) {
        Notify({
          type: "warning",
          message: "两次输入的密码不一致",
        });
        return;
      } else {
        const u = changePasswordAPI(getToken(), this.password, this.repwd);
        if (u.code == 1) {
          Notify({
            type: "success",
            message: u.message,
          });
          this.$router.push({
            name: "User",
          });
        } else {
          Notify({
            type: "warning",
            message: u.message,
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.reg {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>