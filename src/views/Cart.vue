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
            <van-checkbox
              v-model="item.checked"
              shape="square"
              icon-size="1rem"
            >
            </van-checkbox>
            <van-card
              :price="item.goods_price.toFixed(2)"
              :title="item.goods_name"
              :thumb="item.goods_small_logo | dalImg"
              class="goods-card"
              @click-thumb="toDetail(item.goods_id)"
            >
              <template #footer>
                <van-stepper
                  v-model="item.goods_num"
                  disable-input
                  @minus="minus(item.goods_id)"
                  @plus="plus(item.goods_id)"
                />
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
import { addCartAPI, searchCartAPI, deleteCartAPI } from "@/services/user.js";
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
  async created() {
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
    let arr = [];
    await cart_list_arr.map((item) => {
      get("/api/public/v1/goods/detail", { goods_id: item }).then((res) => {
        arr.push({
          ...res.data.message,
          checked: false,
          goods_num: cart_list[item],
        });
      });
    });
    this.carts = arr;
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
      });
    },
    toDetail(id) {
      this.$router.push({
        name: "Detail",
        query: {
          id,
        },
      });
    },
    onSubmit() {
      // Toast.success("提交订单成功！");
      if (this.carts.filter((item) => item.checked).length != 0) {
        let product = [];
        this.carts
          .filter((item) => item.checked)
          .forEach((item) => {
            product.push({
              id: item.goods_id,
              num: item.goods_num,
              img: item.goods_small_logo,
              title: item.goods_name,
              price: item.goods_price.toFixed(2),
            });
          });
        this.$router.push({
          name: "Order",
          query: { product: JSON.stringify(product) },
        });
      } else {
        Toast.fail("请先选择商品！");
      }
    },
    delProduct(id) {
      deleteCartAPI(getToken(), id);
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
      let arr = [];
      cart_list_arr.map((item) => {
        get("/api/public/v1/goods/detail", { goods_id: item }).then((res) => {
          arr.push({
            ...res.data.message,
            checked: false,
            goods_num: cart_list[item],
          });
        });
      });
      this.carts = arr;
      Toast.success("删除商品成功！");
    },
    minus(id) {
      addCartAPI(getToken(), id, -1);
    },
    plus(id) {
      addCartAPI(getToken(), id, 1);
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
        .reduce((pre, cur) => pre + cur.goods_price * cur.goods_num * 100, 0);
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
.van-card__content {
  margin-left: 3%;
}
.van-submit-bar {
  position: static;
}
.van-card__footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.item {
  margin: 0 3%;
  display: flex;
}
.van-card {
  flex: 1;
}
.van-checkbox {
  padding-right: 5%;
}
</style>