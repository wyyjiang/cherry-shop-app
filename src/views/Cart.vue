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
            <i class="noitalic"
              >当前已选{{ carts.filter((item) => item.checked).length }}件(共{{
                carts.length
              }}件)</i
            >
          </el-card>
        </div>
        <div class="product">
          <div class="item" v-for="item in carts" :key="item.goods_id">
            <van-card
              :price="item.goods_price.toFixed(2)"
              desc="描述信息"
              :title="item.goods_name"
              :thumb="item.goods_small_logo"
              :num="item.goods_num"
              class="goods-card"
            >
              <template #tag>
                <van-checkbox
                  v-model="item.checked"
                  shape="square"
                  icon-size="1rem"
                ></van-checkbox>
              </template>
              <template #footer>
                <van-stepper v-model="item.goods_num" disable-input />
                <van-button
                  type="danger"
                  size="small"
                  @click="delProduct(item.goods_id)"
                  >删除</van-button
                >
              </template>
            </van-card>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <van-submit-bar
        :price="sumPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { searchCartAPI, deleteCartAPI } from "@/services/user.js";
import { getToken } from "@/utils/tools.js";
import { get } from "@/utils/request.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      name: "Cart",
      isEmpty: false,
      num: 1,
      carts: [],
    };
  },
  created() {
    // 获取用户的购物车列表
    const cart_list = searchCartAPI(getToken());
    // 判断购物车列表是否为空
    const cart_list_arr = Object.keys(cart_list);
    const cart_list_length = cart_list_arr.length;
    if (cart_list_length == 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
    // 获取商品信息
    // console.log(cart_list);
    // console.log(cart_list_arr);
    const arr = [];
    cart_list_arr.map(async (item) => {
      arr.push(get("/api/public/v1/goods/detail", { goods_id: item }));
    });
    Promise.all(arr).then((res) => {
      console.log(res);
    });
    // cart_list_arr.map(async (item) => {
    //   await get("/api/public/v1/goods/detail", { goods_id: item }).then(
    //     (res) => {
    //       console.log({
    //         ...res.data.message,
    //         checked: false,
    //         goods_num: cart_list[item],
    //       });
    //       this.carts.push(res.data.message);
    //     }
    //   );
    // });
    // console.log(this.carts);
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
      });
    },
    onSubmit() {
      Toast.success("提交订单成功！");
    },
    delProduct(id) {
      deleteCartAPI(getToken(), id);

      Toast.success("删除商品成功！");
    },
  },
  watch: {},
  computed: {
    checked: {
      set(v) {
        this.carts.forEach((item) => (item.checked = v));
      },
      get() {
        if (this.carts.length == 0) {
          return false;
        } else {
          return (
            this.carts.length ===
            this.carts.filter((item) => item.checked).length
          );
        }
      },
    },
    sumPrice() {
      return this.carts
        .filter((item) => item.checked)
        .reduce((pre, cur) => pre + cur.goods_price * cur.goods_num, 0);
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
  overflow-y: auto;
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
.van-image {
  padding-left: 30%;
}
.van-card__content {
  padding-left: 10%;
}
.van-submit-bar {
  position: static;
}
.van-card__footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.van-stepper > input {
  background-color: #fff;
}
.van-card {
  margin: 3%;
}
</style>