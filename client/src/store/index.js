import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: { dummyMenu: [], filterForm: {} },
  mutations: {
    setMenus(state, menu) {
      if (menu.length === 0)
        this.state.dummyMenu = [{ name: "조건을 다시 설정해 주세요" }]
      else this.state.dummyMenu = menu
    },
    async letsgo(state, place) {
      const res = await axios.post("http://localhost:3000/menus/go", { place })
      console.log(res)
    },

    async addMenu(state, menu) {
      const res = await axios.post("http://localhost:3000/menus", menu)
      console.log(res)
    },
  },
  actions: {},
  modules: {},
})
