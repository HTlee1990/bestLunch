<template>
  <div class="profile__wrapper">
    <div class="profile__header"><h3>나의 점심</h3></div>
    <div>
      <span>user</span>
    </div>
    <div>
      <span>email</span>
    </div>
    <div>
      <span>user</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
}
</script>

<style lang="scss" scoped>
@import "@/style/common";

.profile__wrapper {
  @include header;
}
</style>
