/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import Vue from "vue";
import Vuex from "vuex";
import userInfo from "./modules/userInfo";
import createPresistedState from "vuex-persistedstate";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    userInfo,
  },
  getters: {
    isLogined: (state) => {
      return state.userInfo.isLogined;
    },
  },
  plugins: [
    createPresistedState({
      key: "store",
      storage: window.localStorage,
      reducer(state) {
        return {
          userInfo: state.userInfo,
        };
      },
    }),
  ],
});
