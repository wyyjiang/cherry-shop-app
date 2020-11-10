<template>
  <div class="cart">
    <div class="header">
      <van-nav-bar class="cart_main" title="购物车"></van-nav-bar>
    </div>
    <div class="cart_content">
      <div class="empty" v-if="isEmpty">
        <van-empty
          image="search"
          description="购物车还没有商品哦~快去首页看看吧！"
        >
          <van-button round type="danger" class="bottom-button" @click="toHome"
            >去首页</van-button
          >
        </van-empty>
      </div>
      <div class="noEmpty" v-if="!isEmpty">
        <div class="all">
          <el-card class="card_all">
            <i class="noitalic">当前已选0件(共10件)</i>
          </el-card>
        </div>
        <div class="product">
          <div class="item">
            <van-card
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              class="goods-card"
            >
              <template #tag>
                <input class="checkbox_one" type="checkbox" />
              </template>
              <template #footer>
                <el-input-number
                  v-model="num"
                  :min="1"
                  size="mini"
                ></el-input-number>
                <van-button type="danger">删除</van-button>
              </template>
            </van-card>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <!-- <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template> -->
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Cart",
      isEmpty: false,
      num: 1,
      carts: [],
    };
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
      });
    },
    onSubmit() {
      console.log("提交订单！");
    },
  },
  computed: {
    checked: {
      set(v) {
        this.carts.forEach((item) => (item.checked = v));
      },
      get() {
        return (
          this.carts.length === this.carts.filter((item) => item.checked).length
        );
      },
    },
    sumPrice() {
      return this.carts
        .filter((item) => item.checked)
        .reduce((pre, cur) => pre + cur.product.price * cur.quantity, 0);
    },
  },
};
</script>

<style scoped>
.cart_main {
  background-color: #ffc7c7;
}
.cart {
  display: flex;
  flex-direction: column;
}
.cart_content {
  flex: 1;
  background: #f4f4f4;
}
.empty {
  margin-top: 25%;
}
.bottom-button {
  width: 160px;
  height: 40px;
}
.card_all,
.card_one {
  margin: 2% 3%;
}
.card_all {
  background-color: #fbecec;
  color: #557571;
}
.noitalic {
  font-style: normal;
  padding-left: 5%;
}
.el-card__body {
  display: flex;
  align-items: center;
}
.card_one_img {
  width: 20%;
}
.el-input {
  width: 20px;
}
.van-card__tag {
  margin-top: 40%;
}
.van-image,
.van-card__content {
  padding-left: 10%;
}
.van-submit-bar {
  position: static;
}
/* .delete-button { */
/* height: 100%; */
/* } */
</style>