export const serverUrl = "https://api-hmugo-web.itheima.net";

//判断是否登录
export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}

// 设置token
export function setToken(val) {
  localStorage.setItem("token", val);
}

// 取token
export function getToken() {
  localStorage.getItem("token");
}

// 删除token
export function removeToken() {
  localStorage.removeItem("token");
}
