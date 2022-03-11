import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Cookies from "js-cookie";

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

  await store.dispatch("userStore/AC_GET_AT_WITH_RT");
  if (whiteLists.includes(`${to.path}`)) {
    next();
  }
  const isLogin = Cookies.get("logined");
  const AT = Cookies.get("Authentication");
  const RT = Cookies.get("Refresh");
  console.log(AT, RT);

  //만약 AT, RT 모두 만료 됐다면, 홈페이지로 이동 후, 로그인 필요 with logined 쿠키 삭제
  if (!AT && !RT) {
    Cookies.remove("logined");
    next({ path: "/" });
  }
  //만약, AT만 만료 됐다면, RT를 이용해 재발급
  else if (!AT) {
    await store.dispatch("userStore/AC_GET_AT_WITH_RT");
  }

  if (!isLogin) {
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
