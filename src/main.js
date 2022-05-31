import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import store from "./store";
import MyUI from '@/views/practices/mixinUI/libs/MyUI'

Vue.use(ViewUI);
Vue.config.productionTip = false;

Vue.mixin(MyUI);
// 实现全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.requireAuth) {
    if (store.state.userInfo.data.token) {
      if (to.path === "/login") {
        next("/");
      } else {
        next();
      }
    } else {
      next("/login");
    }
  } else {
    if (store.state.userInfo.data.token) {
      next("/");
    } else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
