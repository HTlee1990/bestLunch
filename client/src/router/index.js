import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Cookies from "js-cookie";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "landing",
    component: () => import("../views/landing.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const whiteLists = ["/home", "/"];
  //if it is not in the whiteLists, need to Login
  const isLogin = Cookies.get("logined");
  console.log("Login components - ", Login);
  if (!whiteLists.includes(`${to.path}`)) {
    if (!isLogin) {
      const res = await store.dispatch("userStore/AC_OPEN_MODAL", to.path);
      if (res) {
        next();
      }
    } else next();
  } else {
    next();
  }
});

export default router;
