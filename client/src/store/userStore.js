export default {
  namespaced: true,
  state: () => ({
    modalOpen: false,
  }),
  mutations: {
    openModal(state) {
      console.log("openModal")
      state.modalOpen = true
    },
    cloaseModal(state) {
      // `state` is the local module state
      state.modalOpen = false
    },
  },
  getters: {
    GE_MODALOPEN: (state) => state.modalOpen,
  },
}
