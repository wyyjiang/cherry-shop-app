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

/* // Add a request interceptor
// 全局请求拦截，在发起请求之前触发
// 可以做的事情：1. 添加全局loading 2. 添加token
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// 全局响应拦截，网络请求返回之后触发，可以做错误处理
// 可以做的事情：1. 清除loading 2. 错误异常处理
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
); */
