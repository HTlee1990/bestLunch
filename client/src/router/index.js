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
  if (!whiteLists.includes(`${to.path}`) && !isLogin) {
    //로그인이 되어 있지 않다면, 모달 오픈
    const res = await store.dispatch("userStore/AC_OPEN_MODAL", to.path);

    if (res) {
      //정상적으로 로그인 마쳤다면, 원래 목적지로 이동
      next();
    } else {
      //Error가 발생했다면, Home페이지에 계속 머문다.
      next({ path: "/" });
    }
  } else {
    next();
  }
});

export default router;
