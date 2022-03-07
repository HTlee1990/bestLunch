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
      state.modalOpen = true;
      state.destination = payload;
      return new Promise((resolve, reject) => {
        state.resolvePromise = resolve;
        state.rejectPromise = reject;
      });
    },
    AC_CHANGE_PW({ state }) {
      state.resolvePromise();
      state.modalOpen = false;
    },
  },
};
