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

//router 안의 로직 구현
router.beforeEach(async (to, from, next) => {
  const whiteLists = ["/home", "/"];

  //쿠키 및 로그인 여부
  // const isLogin = Cookies.get("logined");
  const AT = Cookies.get("Authentication");
  const RT = Cookies.get("Refresh");
  console.log("AT && RT ???", AT, RT);
  //화이트 리스트에 있는 곳으로 간다면, 로그인 유무 체크 불필요
  if (whiteLists.includes(`${to.path}`)) {
    next();
  }
  //만약, AT만 만료 됐다면, RT를 이용해 재발급 이후, 원래 목적지로 이동.
  else if (!AT && RT) {
    console.log("!AT && RT");
    await store.dispatch("userStore/AC_GET_AT_WITH_RT");
    next();
  }

  //AT RT모두 만료 됐다면, 재 로그인이 필요 && logined 쿠키 삭제
  else if (!AT && !RT) {
    Cookies.remove("logined");
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
