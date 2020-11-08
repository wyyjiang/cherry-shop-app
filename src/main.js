import Vue from "vue";
import ElementUI from "element-ui"; // 引入element-ui
import Vant from "vant"; // 引入vant
import App from "./App.vue";
import router from "./router";
import {
  CouponCell,
  CouponList,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
} from "vant";

Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

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
    return "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601395527_1_400x400.jpg";
  }
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
