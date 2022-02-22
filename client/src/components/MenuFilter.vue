<template>
  <!-- <div> -->
  <div class="testBox">
    <button
      class="box__item"
      :class="{ clicked: isActive.btn1 }"
      @click="clickBtn(1)"
    >
      중식
    </button>
    <button
      class="box__item"
      :class="{ clicked: isActive.btn2 }"
      @click="clickBtn(2)"
    >
      한식
    </button>
    <button
      class="box__item"
      :class="{ clicked: isActive.btn3 }"
      @click="clickBtn(3)"
    >
      일식
    </button>
  </div>
  <!-- <div class="filter__container">
      <div class="filter">
        <select name="category" v-model="filterForm.category">
          <option>한식</option>
          <option>일식</option>
          <option>중식</option>
          <option>양식</option>
          <option>기타</option>
        </select>
      </div>

      <div class="filter">
        <select name="rice/noodle" v-model="filterForm.rice">
          <option>밥</option>
          <option>면</option>
        </select>
      </div>
      <div class="filter">
        <select name="distance" v-model="filterForm.distance">
          <option>상</option>
          <option>중</option>
          <option>하</option>
        </select>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  // props: ["filterForm"],
  data() {
    return {
      isActive: { btn1: false, btn2: false, btn3: false },
    }
  },
  methods: {
    clickBtn(num) {
      this.isActive[`btn${num}`] = !this.isActive[`btn${num}`]
    },
  },
}
</script>

<style lang="scss" scoped>
/* .filter__container {
  display: flex;
  justify-content: center;
}
.filter {
  background: rgba(0, 173, 255, 0.9);
  padding: 20px 20px;
  margin: 0 0.5rem;
}
.filter:hover {
  filter: contrast(200%);
  cursor: pointer;
} */
.testBox {
  border: 0;
  width: 90%;
  height: 10%;
  margin: 3rem;
  // box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  display: flex;

  .box__item {
    border: 1px solid #1aab8a;
    // box-shadow: 1px 2px 0 #1aab8a;
    background: white;
    width: 50%;
    height: 100%;
    margin: 0 3px;
    cursor: pointer;
    // box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    transition: all 0.9s;

    &:hover {
      background: #1aab8a;
      // box-shadow: 0 160px 0 0 rgba(0, 0, 0, 0.1) inset,
      //   0 -160px 0 0 rgba(0, 0, 0, 0.1) inset;
      box-shadow: 0 160px 0 0 rgba(21, 137, 110, 0.3) inset,
        0 -160px 0 0 rgba(21, 137, 110, 0.3) inset;
      color: white;
    }
    &.clicked {
      // box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      box-shadow: none;
      position: relative;
      top: 3px;
      left: 1px;
      background: #1aab8a;
      // box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      //   rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
  }
}
</style>
