// 写网络请求的封装

import axios from "axios";
import { serverUrl } from "./tools";

// , getToken, removeToken
// 引入插件Notify
// import { Notify } from "vant";
// 引入进度条插件NProgress
// import NProgress from "nprogress";

// 创建一个实例
const instance = axios.create({
  timeout: 5000,
  baseURL: serverUrl,
});

// get请求
export const get = (url, params) => instance.get(url, { params });

// post请求
export const post = (url, data) => instance.post(url, data);

// put请求
export const put = (url, data) => instance.put(url, data);

// delete请求
export const del = (url) => instance.post(url);
