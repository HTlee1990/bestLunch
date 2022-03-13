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
  const userInfo = await store.state.userStore.currentUser;
  console.log("userInfo", userInfo);

  //만약 로그인 했지만, 유저인포가 없는 경우라면, 유저 정보 받아오기.
  if (AT && !userInfo?.idx) {
    console.log("AT && !userInfo?.idx");
    await store.dispatch("userStore/AC_GET_USER_INFO");
  }

  //1. 화이트 리스트에 있는 곳으로 간다면, 로그인 유무 체크 불필요
  if (whiteLists.includes(`${to.path}`)) {
    next();
    //2. 목적지가 화이트리스트에 없다면 토큰 체크
  } else {
    //3. 유효한 AT가 있다면,
    if (AT) {
      //3-1. 유저 인포 있는지 체크, 없다면 다시 받아오고
      if (!userInfo.idx) {
        console.log("AT && !userInfo?.idx");
        await store.dispatch("userStore/AC_GET_USER_INFO");
      }
      //3-2. 목적지로 이동
      next();
    }
    //4. 유효한 토큰 없다면 재발급 혹은 재로그인 필요
    else {
      //4-1.RT 있다면, AT재발급 후, 유저정보 받아오기
      if (RT) {
        await store.dispatch("userStore/AC_GET_AT_WITH_RT");
        await store.dispatch("userStore/AC_GET_USER_INFO");
        next();
      }
      //4-2. RT없다면 재로그인 필요
      else {
        Cookies.remove("logined");
        const res = await store.dispatch("userStore/AC_OPEN_MODAL", to.path);
        if (res) {
          //정상적으로 로그인 마쳤다면, 원래 목적지로 이동
          next();
        } else {
          //Error가 발생했다면, Home페이지에 계속 머문다.
          next({ path: "/" });
        }
      }
    }
  }
});

export default router;
