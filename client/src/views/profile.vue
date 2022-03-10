<template>
  <div class="profile__wrapper">
    <div class="card">
      <div class="profile__top"></div>
      <div class="avatar">
        <img
          src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
          alt="random image"
        />
      </div>
      <!-- <div class="profile__header"><h3>My YL</h3></div> -->
      <div class="name">
        <span>userName</span>
        <h6>좋아요갯수</h6>
      </div>
      <div class="info">
        <h6 class="pens">
          <span>PENS</span>
          <p>30</p>
        </h6>
        <h6 class="likes">
          <span>LIKES</span>
          <p>300</p>
        </h6>
        <h6 class="reviews">
          <span>REVIEWS</span>
          <p>13</p>
        </h6>
      </div>
      <div class="stats">
        <h6>STATS</h6>
        <div class="skill korean">
          <h6>KOREAN</h6>
          <div class="bar bar-korean"><p>95%</p></div>
        </div>
        <div class="skill japanese">
          <h6>japanese</h6>
          <div class="bar bar-japanese"><p>60%</p></div>
        </div>
        <div class="skill chinese">
          <h6>chinese</h6>
          <div class="bar bar-chinese"><p>70%</p></div>
        </div>
      </div>
      <!-- <div class="info__wrapper">
        <div class="input__wrapper">
          <span>user</span>
          <input type="text" />
        </div>
        <div class="input__wrapper">
          <span>email</span>
          <input type="text" />
        </div>
        <div class="input__wrapper">
          <span>otherInfo</span>
          <input type="text" />
        </div>
      </div> -->
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
  /* position: relative; */
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  .card {
    background: #fff;
    /* background: #151515; */
    border-radius: 10px;
    max-width: 300px;
    padding: 1rem;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    height: 400px;
    overflow: hidden;

    .profile__top {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: $col-primary;
      height: 80px;
    }

    .avatar {
      height: 6rem;
      width: 6rem;
      background: linear-gradient(90deg, #ff9966, #ff5e62);
      box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
      /* box-shadow: 0 0 0 5px #151515, inset 0 0 0 5px #000000,
        inset 0 0 0 5px #000000, inset 0 0 0 5px #000000,
        inset 0 0 0 5px #000000; */
      border-radius: 50%;
      position: absolute;
      margin: auto;
      top: 40px;
      right: 0;
      left: 0;

      img {
        z-index: 4;
        height: 5.5rem;
        width: 5.5rem;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
      }
    }

    .name {
      position: absolute;
      margin: auto;
      top: -70px;
      right: 0;
      bottom: 0;
      left: 0;
      width: inherit;
      height: 40px;
      text-align: center;
      background: #ff5e62;
      display: flex;
      flex-direction: column;
      span:nth-child(1) {
        color: white;
        text-decoration: none;
        font-weight: 700;
        font-size: 18px;
      }
    }

    .info {
      position: absolute;
      margin: auto;
      top: 80px;
      bottom: 0;
      height: 40px;
      width: inherit;
      left: 0;
      right: 0;

      display: flex;
      flex-direction: row;
      justify-content: center;

      .pens,
      .likes,
      .reviews {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(250px / 3);
      }
    }

    .stats {
      position: absolute;
      margin: auto;
      right: 0;
      left: 0;
      bottom: 20px;
      width: 200px;
      height: 100px;

      h6 {
        margin-bottom: 5px;
        font-weight: 700;
        text-transform: uppercase;
        color: crimson;
      }

      .skill {
        display: flex;
        flex-direction: column;
        h6 {
          font-weight: 400;
          font-size: 8px;
          letter-spacing: 0.05em;
          margin: 4px 0;
        }

        .bar {
          height: 5px;
          width: 200px;
          background: crimson;
          p {
            text-align: right;
            color: grey;
            font-size: 8px;
            padding-top: 5px;
            animation: fadeIn 5s;
          }
        }

        .bar-korean {
          width: 95%;
        }
        .bar-japanese {
          width: 60%;
        }
        .bar-chinese {
          width: 70%;
        }
      }
    }

    /* .info__wrapper {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: space-between;
      gap: 1rem;

      .input__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        input {
          flex-shrink: 1;
          flex-basis: 0;
        }
      }
    }
    .profile__wrapper {
      @include header;
    } */
  }
}
</style>
