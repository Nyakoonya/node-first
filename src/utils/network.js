/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import Vue from "vue";
import axios from "axios";
import { apiUrl } from "./url";
import store from "../store";

// 创建实例
const service = axios.create({
  baseURL: apiUrl,
  timeout: 55000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.state.userInfo.data.token) {
      config.headers["authorization"] = store.state.userInfo.data.token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log("response.data :>> ", response.data);
    // token失效，抛出401，刷新页面，清除缓存，跳转到登录页面
    if (response.data.code === 401 || response.data.code === 403) {
      store.dispatch("userInfo/logout").then(() => {
        location.reload();
      });
    }
    return response.data;
  },
  (error) => {
    console.log("error :>> ", error);
    const { status, msg } = error.response;
    console.log("msg ----:>> ", msg);
    if (status === 401 || status === 403) {
      store.dispatch("userInfo/logout").then(() => {
        location.reload();
      });
      Vue.prototype.$Message.error({
        content: "授权过期，请重新登录",
        duration: 5,
      });
    } else {
      Vue.prototype.$Message.error({
        content: msg,
        duration: 5,
      });
    }
    return Promise.reject(error);
  }
);

export default service;
