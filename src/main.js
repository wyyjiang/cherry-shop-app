import Vue from "vue";
import ElementUI from "element-ui"; // 引入element-ui
import Vant from "vant"; // 引入vant
import App from "./App.vue";
import router from "./router";

var eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;
// import {
//   CouponCell,
//   CouponList,
//   GoodsAction,
//   GoodsActionIcon,
//   GoodsActionButton,
// } from "vant";

// Vue.use(CouponCell);
// Vue.use(CouponList);
// Vue.use(GoodsAction);
// Vue.use(GoodsActionButton);
// Vue.use(GoodsActionIcon);

import { serverUrl } from "@/utils/tools";
Vue.use(Vant);

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.filter("dalImg", (val) => {
  if (val) {
    if (val.startsWith("http")) {
      return val;
    } else {
      return serverUrl + val;
    }
  } else {
    // 没有图片的话设置默认图片
    return "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2241501882,276530757&fm=26&gp=0.jpg";
  }
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
