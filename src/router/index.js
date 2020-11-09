import Vue from "vue";
import VueRouter from "vue-router";
// import { isLogined } from "@/utils/tools";
import Home from "../views/Home.vue";

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
    path: "/logo",
    name: "Logo",
    component: () => import(/* webpackChunkName: "user" */ "../views/Logo.vue"),
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import(/* webpackChunkName: "user" */ "../views/Reg.vue"),
  },
  {
    path: "/addresslist",
    name: "addressList",
    component: () => import(/* webpackChunkName: "user" */ "../views/addressList.vue"),
  },
  {
    path: "/addressedit",
    name: "addressEdit",
    component: () => import(/* webpackChunkName: "user" */ "../views/addressEdit.vue"),
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
