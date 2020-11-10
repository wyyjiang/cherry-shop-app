import Vue from "vue";
import Router from "vue-router";
import { isLogined } from "../utils/tools";
// import { isLogined } from "@/utils/tools";
import Home from "../views/Home.vue";
// import { Toast } from "vant";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/classify",
    name: "Classify",
    component: () => import("../views/Classify.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      needLogin: true,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      needLogin: true,
    },
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
    path: "/collect",
    name: "Collect",
    component: () => import("../views/Collect.vue"),
  },
  {
    path: "/addresslist",
    name: "addressList",
    component: () => import("../views/addressList.vue"),
  },
  {
    path: "/addressedit",
    name: "addressEdit",
    component: () => import("../views/addressEdit.vue"),
  },
  {
    path: "/amend",
    name: "amend",
    component: () => import("../views/amend.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404"),
  },
];

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
