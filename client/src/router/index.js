import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"
import Cookies from "js-cookie"

Vue.use(VueRouter)

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
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const whiteLists = ["/home", "/"]
  //if it is not in the whiteLists, need to Login
  const isLogin = Cookies.get("logined")

  if (!whiteLists.includes(`${to.path}`)) {
    if (!isLogin) {
      store.commit("userStore/openModal")
    } else next()
  } else {
    next()
  }
})

export default router
