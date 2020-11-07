import Vue from "vue";
import VueRouter from "vue-router";
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "classify" */ "../views/Classify.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue"),
  },
  {
    path: "*",
    component: () => import("../views/404"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
