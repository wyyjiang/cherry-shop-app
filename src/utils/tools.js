export const serverUrl = "https://api-hmugo-web.itheima.net";


//判断是否登录
export function isLogined() {
  if (localStorage.getItem("uid")) {
    return true;
  }
  return false;
}

// 设置token
export function setToken(val) {
 return localStorage.setItem("uid", val);
}

// 取token
export function getToken() {
  return localStorage.getItem("uid");
}

// 删除token
export function removeToken() {
 return localStorage.removeItem("uid");
}
