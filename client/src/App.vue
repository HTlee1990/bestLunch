<template>
  <div id="app">
    <Login v-if="isModalOpen" @closeModal="closeModal" />
    <router-view />
    <Sidebar />
  </div>
</template>

<script>
import "./App.scss"
import Sidebar from "./components/Sidebar.vue"
import Login from "./components/Login.vue"

export default {
  components: { Sidebar, Login },
  data() {
    return {
      isModalOpen: true,
    }
  },
  methods: {
    closeModal() {
      this.isModalOpen = false
    },
  },
}
</script>
