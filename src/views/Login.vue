<template>
  <div class="logo">
    <div><img src="../assets/cherry-logo.png" alt="" /></div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
        <div class="root" >
            <router-link :to="{ name: 'Reg' }">没有密码我要注册</router-link>
        </div>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.logo>div{
    display: flex;
    justify-content: center;
}
img {
  width: 50%;
}
.root{
    text-align: center;
    margin-top: 20px;
}
</style>