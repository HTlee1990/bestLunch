<template>
  <div>
    <div class="filter__container">
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["filterForm"],
  data() {
    return {}
  },
}
</script>

<style scoped>
.filter__container {
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
}
</style>
