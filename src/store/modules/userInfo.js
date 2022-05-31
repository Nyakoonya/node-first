/*
 * @Descripttion: 
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
const userInfo = {
    namespaced: true,
    state: {
        isLogined: false,
        data: {}
    },
    getters: {
        userInfo: state => state.data
    },

    mutations: {
        // 设置用户信息
        setUserInfo(state, userInfo) {
            state.data = userInfo;
            state.isLogined = true;
        },
        // 清除用户信息
        clearUserInfo(state, emptyInfo) {
            state.data = emptyInfo;
            state.isLogined = false;
        },
        // 修改用户信息
        modifyUserInfo(state, newInfo) {
            state.data = Object.assign(state.data, newInfo);
        }
    },

    actions: {
        // 保存用户信息
        saveUserInfo({ commit }, result) {
            commit('setUserInfo', result)
        },
        // 退出登录
        logout({ commit }) {
            commit('clearUserInfo', {})
            location.href = '/login'
        }
    }
}

export default userInfo