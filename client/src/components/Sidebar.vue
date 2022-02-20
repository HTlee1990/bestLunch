<template>
  <div class="nav__wrapper">
    <div class="nav__item__wrapper">
      <router-link to="/" class="nav__item">
        <font-awesome-icon icon="fa-solid fa-house-chimney" />
        <span to="/">Home</span>
      </router-link>
      <router-link to="/register" class="nav__item">
        <font-awesome-icon icon="fa-solid fa-utensils" />
        <span to="/register">맛집 등록</span>
      </router-link>
      <router-link to="/profile" class="nav__item">
        <font-awesome-icon icon="fa-solid fa-user-astronaut" />
        <span>내 정보</span>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style>
.nav__wrapper {
  /* display: flex;
  justify-content: center; */
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
  /* display: flex; */
}
.nav__item__wrapper {
  display: flex;
  justify-content: space-between;
  margin: 1em 1.5em;
}
.nav__item {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1rem;
  gap: 10px 0;
}
</style>
