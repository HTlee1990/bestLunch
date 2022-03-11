import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    modalOpen: false,
    destination: "/",
    resolvePromise: undefined,
    rejectPromise: undefined,
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
      const res = await axios.get("http://localhost:3000/auth/access_token");
      console.log(res);
    },
  },
};
