<template>
  <div class="about">
    <div class="header">
      <h3>메뉴 추가하기</h3>
    </div>

    <form class="form__container" @submit.prevent="submitform">
      <div class="input__container">
        <label for="name" class="title">가게이름</label>
        <input id="name" type="text" v-model="menuForm.name" required />
      </div>
      <div class="input__container">
        <span class="title">카테고리</span>
        <select name="rice/noodle" v-model="menuForm.category" required>
          <option>한식</option>
          <option>일식</option>
          <option>중식</option>
          <option>양식</option>
          <option>기타</option>
        </select>
      </div>
      <div class="input__container">
        <label for="menu" class="title">메뉴</label>
        <input id="menu" type="text" v-model="menuForm.menu" required />
      </div>

      <div class="input__container">
        <span class="title">밥/면</span>
        <select name="rice/noodle" v-model="menuForm.isNoodle">
          <option>밥</option>
          <option>면</option>
        </select>
      </div>
      <div class="input__container">
        <span class="title">거리</span>
        <select name="rice/noodle" v-model="menuForm.distance" required>
          <option>상</option>
          <option>중</option>
          <option>하</option>
        </select>
      </div>
      <div class="registerBtn">
        <CustomButton type="submit">추가</CustomButton>
      </div>
    </form>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue"
export default {
  components: { CustomButton },
  data() {
    return {
      menuForm: {
        name: "",
        category: "한식",
        menu: "",
        isNoodle: "밥",
        distance: "상",
      },
    }
  },
  methods: {
    submitform() {
      this.$store.commit("addMenu", this.menuForm)
    },
  },
  computed: {},
  created() {
    // console.log("router", this.$router)
    // console.log("route", this.$route)
  },
}
</script>

<style lang="scss" scoped>
.header {
  margin: 1rem;
}

.about {
  display: flex;
  flex-direction: column;
}
.form__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  .input__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;
    .title {
      margin-right: 0.5rem;
    }

    input {
      /* position: absolute;
      right: 0; */
      width: 50%;
      text-align: center;
      height: 1.5rem;
      font-family: "Kirang Haerang", cursive;
      font-size: 1.5rem;
      border: none;
      box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.35);
    }
    input:focus {
      outline: none;
    }

    select {
      /* -webkit-appearance: none; 네이티브 외형 감추기 */
      width: 50%;
      text-align: center;
      font-family: "Kirang Haerang", cursive;
      /* font-size: 1.5rem; */
      height: 2rem;
      padding: 3px 6px;
    }
    select::-ms-expand {
      display: none;
    }
  }
  .registerBtn {
    display: flex;
    justify-content: center;
  }
}
</style>
