import axios from "axios";

// import { get } from "@/utils/request";

export function regAPI(user) {
  return axios.get("http://jx.xuzhixiang.top/ap/api/reg.php", user);
}

export function loginAPI(user) {
  return axios.get("http://jx.xuzhixiang.top/ap/api/login.php", user);
}

/**
 * 获取用户信息
 */
export function userInfoAPI() {
  return axios.get("http://jx.xuzhixiang.top/ap/api/checkname.php");
}

// 给用户购物车添加商品
export function addProduct(uid, pid, pnum) {
  return axios.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
    params: {
      uid,
      pid,
      pnum,
    },
  });
}

var user = {
  "user1": {
    password: "",
    cart: [],
    collect: [],
  },
}
console.log(user);
