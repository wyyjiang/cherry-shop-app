import axios from 'axios'

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
