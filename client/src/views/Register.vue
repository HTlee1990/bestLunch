<template>
  <div class="about">
    <Modal ref="modal" @setCategory="setCategory">
      <div class="testwrapper">
        <div @click="closeSelect(0)">한식</div>
        <div @click="closeSelect(1)">일식</div>
        <div @click="closeSelect(2)">중식</div>
        <div @click="closeSelect(3)">양식</div>
        <div @click="closeSelect(4)">기타</div>
      </div>
      <!-- <select name="rice/noodle" v-model="menuForm.category" required>
        <option>한식</option>
        <option>일식</option>
        <option>중식</option>
        <option>양식</option>
        <option>기타</option>
      </select> -->
    </Modal>
    <div class="header">
      <h3>맛집 등록하기</h3>
    </div>
    <div class="divider"></div>
    <form class="form__container" @submit.prevent="submitform">
      <div class="input__container">
        <!-- <label for="name" class="title">가게명</label> -->
        <input
          id="name"
          type="text"
          v-model="menuForm.name"
          placeholder="가게명"
          required
        />
      </div>
      <div class="divider"></div>
      <div class="input__container category" @click="openSelect">
        <span class="title">{{ menuForm.category }}</span>
        <div>arrow</div>
      </div>
      <div class="divider"></div>
      <div class="input__container">
        <!-- <label for="menu" class="title">대표 메뉴</label> -->
        <input
          id="menu"
          type="text"
          v-model="menuForm.menu"
          placeholder="대표메뉴"
          required
        />
      </div>
      <div class="divider"></div>
      <!-- 
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
      </div> -->
      <div class="registerBtn">
        <CustomButton type="submit">내 맛집 등록하기</CustomButton>
      </div>
    </form>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import Modal from "@/components/Modal.vue";
export default {
  components: { CustomButton, Modal },
  data() {
    return {
      category: ["한식", "일식", "중식", "양식", "기타"],
      menuForm: {
        name: "",
        category: "카테고리",
        menu: "",
        isNoodle: "밥",
        distance: "상",
      },
    };
  },
  methods: {
    setCategory(cate) {
      console.log("activated!", cate);
      this.menuForm.category = cate;
    },
    openSelect() {
      this.$refs.modal.openModal();
    },
    closeSelect(num) {
      this.$refs.modal.closeModal(this.category[num]);
    },
    submitform() {
      this.$store.commit("addMenu", this.menuForm);
    },
  },
  computed: {},
  created() {
    // console.log("router", this.$router)
    // console.log("route", this.$route)
  },
};
</script>

<style lang="scss" scoped>
@import "~@/style/common";

.testwrapper {
  background: white;
  cursor: pointer;
  width: 90%;
  border-radius: 3px;
  div {
    height: 2rem;
    text-align: center;
    &:hover {
      background: gray;
    }
  }
}

.header {
  @include header;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  padding: 2rem;
  gap: 1rem;
}
.divider {
  /* height: 1px; */
  width: 100%;
  border-bottom: 0.1px solid rgb(177, 177, 177);
}

.form__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .input__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;

    &.category {
      cursor: pointer;
    }

    .title {
      margin-right: 0.5rem;
    }

    input {
      /* position: absolute;
      right: 0; */

      height: 1.5rem;
      font-family: "Kirang Haerang", cursive;
      font-size: 1rem;
      border: none;
      box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.35);
    }
    input:focus {
      outline: none;
    }

    select {
      /* 네이티브 외형 감추기
      -webkit-appearance: none; */
      /* font-family: "Kirang Haerang", cursive; */
      width: 50%;
      text-align: center;
      height: 2rem;
      padding: 3px 6px;
      border: none;
    }
    select::-ms-expand {
      display: none;
    }
  }
  .registerBtn {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>
