import Vue from 'vue'
import ElementUI from "element-ui"; // 引入element-ui
import Vant from "vant"; // 引入vant
import App from './App.vue'
import router from './router'

Vue.use(Vant);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
