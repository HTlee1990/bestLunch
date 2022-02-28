<template>
  <div id="app">
    <Login v-if="isModalOpen" @closeModal="closeModal" />
    <router-view />
    <Sidebar />
  </div>
</template>

<script>
import "./App.scss"
import { mapGetters } from "vuex"
import Sidebar from "./components/Sidebar.vue"
import Login from "./components/Login.vue"

export default {
  components: { Sidebar, Login },
  data() {
    return {}
  },
  computed: {
    ...mapGetters("userStore", { isModalOpen: "GE_MODALOPEN" }),
  },
  methods: {
    closeModal() {
      this.$store.commit("userStore/cloaseModal")
    },
  },
}
</script>
