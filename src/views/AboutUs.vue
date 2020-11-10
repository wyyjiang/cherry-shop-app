<template>
  <van-overlay :show="show" @click="show = false">
    <div class="wrapper" @click.stop>
      <div class="block" />
      
    </div>
  </van-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
  .wrapper {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    height: 100%;
  }

  .block {
      margin-top: 120px;
    width: 90%;
    height: 220px;
    /* background: rgb(76, 76, 76,); */
    background: #fff;
  }
  .block p{
      color: #fff;
  }
</style>