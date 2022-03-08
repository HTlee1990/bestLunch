<template>
  <div class="profile__wrapper">
    <div class="profile__card">
      <div class="img_pod">
        <img
          src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
          alt="random image"
        />
      </div>
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
  </div>
</template>

<script>
export default {
  name: "profile",
};
</script>

<style lang="scss" scoped>
@import "@/style/common";

.profile__wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .profile__card {
    background: #fff;
    border-radius: 10px;
    max-width: 300px;
    padding: 5rem 5rem 5rem 5rem;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
    position: relative;

    .img_pod {
      height: 5rem;
      width: 5rem;
      background: linear-gradient(90deg, #ff9966, #ff5e62);
      z-index: 2;
      box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
      border-radius: 100%;
      position: absolute;
      left: -50px;
      top: 10px;
      transform: translateY(-50%);
      img {
        height: 4rem;
        width: 4rem;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
      }
    }

    .profile__wrapper {
      @include header;
    }
  }
}
</style>
