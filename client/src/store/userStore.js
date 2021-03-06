// import axios from "axios";
import { getATbyRT, getUserInfo } from "../api/api";

export default {
  namespaced: true,
  state: () => ({
    modalOpen: false,
    destination: "/",
    resolvePromise: undefined,
    rejectPromise: undefined,
    currentUser: {},
  }),
  mutations: {
    openModal(state, item) {
      console.log("openModal", item);
      state.modalOpen = true;
    },
    cloaseModal(state) {
      // `state` is the local module state
      state.modalOpen = false;
    },
  },
  getters: {
    GE_MODALOPEN: (state) => state.modalOpen,
    GE_CURRENTUSER: (state) => state.currentUser,
  },
  actions: {
    AC_OPEN_MODAL({ state }, payload) {
      //Login 모달창 열기
      state.modalOpen = true;
      //원래 가려고 했던 path 저장
      state.destination = payload;
      //로그인이 완료 될 때 까지 우선 pending상태 유지
      return new Promise((resolve, reject) => {
        state.resolvePromise = resolve;
        state.rejectPromise = reject;
      });
    },

    AC_FINISH_LOGIN({ state }, payload) {
      //모달창 바깥쪽을 클릭했다면, 바로 모달창 종료 후, 리턴
      if (payload === undefined) {
        state.modalOpen = false;
        return;
      }
      //로그인 완료 됐다면, Promise를 fullfilled 로 만들어주기
      state.resolvePromise(payload);
      state.rejectPromise(!payload);
      state.modalOpen = !payload;
    },

    async AC_GET_AT_WITH_RT() {
      await getATbyRT();
    },

    async AC_GET_USER_INFO({ state }) {
      const res = await getUserInfo();
      const { iat, exp, ...userInfo } = res.data;
      state.currentUser = userInfo;
    },
  },
};
