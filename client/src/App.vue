<template>
  <div id="app">
    <router-view />
    <Sidebar />
  </div>
</template>

<script>
import "./App.scss"
import Sidebar from "./components/Sidebar.vue"

export default {
  components: { Sidebar },
  data() {
    return {}
  },
}
</script>
