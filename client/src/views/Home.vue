<template>
  <div class="home">
    <p class="header__wrapper">
      <span> Today Lunch??? </span>
    </p>
    <p class="today__menu">{{ menu }}</p>
    <custom-button>show alert</custom-button>
    <div>
      <custom-button @click.native="openFilter">자세히 설정</custom-button>
    </div>
    <MenuFilter v-bind:filterForm="filterForm" v-if="filterOpened" />
    <div>
      <button class="menuBtn" v-if="menu" @click="decidePlace">결정!</button>
    </div>
    <button class="menuBtn" @click="getMenu">점심메뉴 정하기</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
import MenuFilter from "@/components/MenuFilter.vue"
import CustomButton from "@/components/CustomButton.vue"
import "./Home.scss"

export default {
  name: "Home",
  components: { MenuFilter, CustomButton },

  data() {
    return {
      menu: "",
      filterOpened: false,
      dummyMenu: [],
      clicked: false,
      filterForm: {
        category: "",
        rice: "",
        distance: "",
      },
    }
  },
  methods: {
    //pick randomly menu in filteredList
    async getMenu() {
      const res = await axios.get("http://localhost:3000/menus", {
        params: this.filterForm,
      })
      this.$store.commit("setMenus", res.data)
      const randomNum = Math.floor(
        Math.random() * this.$store.state.dummyMenu.length
      )
      this.menu = this.$store.state.dummyMenu[randomNum].name
    },

    //update lastVisit data
    decidePlace() {
      this.$store.commit("letsgo", this.menu)
    },

    openFilter() {
      console.log("clicked!!!")
      this.filterOpened = !this.filterOpened
    },
  },
  computed: {},
  async mounted() {},
}
</script>

<style scoped>
.home {
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menuBtn:hover .today__menu {
  color: red;
}
</style>
