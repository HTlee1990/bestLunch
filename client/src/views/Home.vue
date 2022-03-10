<template>
  <div class="home">
    <div v-show="!isFirstClick" class="home__wrapper">
      <button class="randomPlace" @click.prevent="getFirstPlace">Click!</button>
    </div>
    <div class="home__wrapper" v-if="isFirstClick">
      <div class="place">
        <p>{{ menu }}</p>
      </div>
      <div>
        <custom-button @click.native="openFilter">자세히 설정</custom-button>
      </div>
      <MenuFilter :filterForm="filterForm" v-if="filterOpened" />
      <div>
        <custom-button
          class="menuBtn"
          v-if="menu !== `오늘 점심은 뭐먹지?`"
          @click.native="decidePlace"
          >결정!</custom-button
        >
      </div>
      <custom-button class="menuBtn" @click.native="getMenu"
        >점심메뉴 정하기</custom-button
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import MenuFilter from "@/components/MenuFilter.vue";
import CustomButton from "@/components/CustomButton.vue";
import "./Home.scss";

export default {
  name: "Home",
  components: { MenuFilter, CustomButton },

  data() {
    return {
      menu: "오늘 점심은 뭐먹지?",
      filterOpened: false,
      isFirstClick: false,
      dummyMenu: [],
      filterForm: {
        category: "",
        rice: "",
        distance: "",
      },
    };
  },
  methods: {
    //pick randomly menu in filteredList
    async getMenu() {
      const res = await axios.get("http://localhost:3000/menus", {
        params: this.filterForm,
      });
      this.$store.commit("menuStore/setMenus", res.data);
      const randomNum = Math.floor(
        Math.random() * this.$store.state.dummyMenu.length
      );
      this.menu = this.$store.state.dummyMenu[randomNum].name;
    },

    //update lastVisit data
    decidePlace() {
      this.$store.commit("letsgo", this.menu);
    },

    openFilter() {
      console.log("clicked!!!");
      this.filterOpened = !this.filterOpened;
    },
    getFirstPlace() {
      console.log("clicked");
      this.isFirstClick = true;
      this.getMenu();
    },
  },
};
</script>

<style scoped></style>
