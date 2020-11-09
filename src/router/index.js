import Vue from "vue";
import VueRouter from "vue-router";
// import { isLogined } from "@/utils/tools";
import Home from "../views/Home.vue";
// import { Toast } from "vant";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/classify",
    name: "Classify",
    component: () =>
      import(/* webpackChunkName: "classify" */ "../views/Classify.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import("../views/Reg.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404"),
  },
  {
    path: "/addresslist",
    name: "addressList",
    component: () => import( "../views/addressList.vue"),
  },
  {
    path: "/addressedit",
    name: "addressEdit",
    component: () => import( "../views/addressEdit.vue"),
  },
  {
    path: "/amend",
    name: "amend",
    component: () => import( "../views/amend.vue"),
  },
];

const router = new VueRouter({
  routes,
});

//判断是否要登录
// router.beforeEach((to, from, next) => {
//   if (to.meta.needLogin) {
//     if (isLogined()) {
//       next();
//     } else {
//       next({
//         name: "Login",
//       });
//     }
//   } else {
//     next();
//   }
// });


export default router;
