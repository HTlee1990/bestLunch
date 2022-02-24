<template>
  <div class="nav__wrapper">
    <div class="nav__item__wrapper">
      <router-link to="/" class="nav__item">
        <font-awesome-icon icon="fa-solid fa-house-chimney" />
        <div>Home</div>
      </router-link>
      <router-link to="/register" class="nav__item">
        <font-awesome-icon icon="fa-solid fa-utensils" />
        <div>맛집 등록</div>
      </router-link>
      <router-link to="/profile" class="nav__item">
        <font-awesome-icon icon="fa-solid fa-user-astronaut" />
        <div>나의 점심</div>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.nav__wrapper {
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
}
.nav__item__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 0 3rem; */
  /* margin: 1em 1em; */
}
.nav__item {
  width: 33%;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 1rem;
  text-align: center;
  gap: 10px 0;
  &:hover {
    color: #1aab8a;
  }
}
</style>
