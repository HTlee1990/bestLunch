<template>
  <div id="app">
    <login-modal v-if="isModalOpen" @closeModal="closeModal" ref="loginModal" />
    <router-view />
    <Sidebar />
  </div>
</template>

<script>
import "./App.scss";
import { mapGetters } from "vuex";
import Sidebar from "./components/Sidebar.vue";
import loginModal from "./components/Login.vue";

export default {
  components: { Sidebar, loginModal },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("userStore", { isModalOpen: "GE_MODALOPEN" }),
  },
  methods: {
    closeModal() {
      // this.$store.commit("userStore/cloaseModal");
      this.$store.dispatch("userStore/AC_CHANGE_PW");
    },
  },
};
</script>
