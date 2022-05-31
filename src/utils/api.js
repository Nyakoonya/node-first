/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import network from "./network";

// 登录
export function login(data) {
  console.log("data -----:>> ", data);
  return network({
    method: "post",
    url: "/login",
    data,
  });
}
export function register(data) {
    console.log('data register:>> ', data);
    return network({
        method: 'post',
        url: '/register',
        data
    })
}
export function test() {
  return network({
    method: "get",
    url: "/test",
  });
}
