<template>
  <div class="modal__wrapper" @click.self="closeModal">
    <div class="form__wrapper">
      <div class="header__wrapper">
        <div
          class="header"
          :class="[!isLoginTab ? 'clicked' : '']"
          @click="handleTab(false)"
        >
          <h3>SignIn</h3>
        </div>
        <div
          class="header"
          :class="[isLoginTab ? 'clicked' : '']"
          @click="handleTab(true)"
        >
          <h3>LogIn</h3>
        </div>
      </div>
      <form class="input__wrapper" action="" v-if="!isLoginTab">
        <div class="label__wrapper">
          <label for="id">id</label>
          <input id="id" type="text" v-model="form__data.id" />
        </div>

        <div class="label__wrapper">
          <label for="email">email</label>
          <input id="email" type="text" v-model="form__data.email" />
        </div>
        <div class="label__wrapper">
          <label for="pw">password</label>
          <input id="pw" type="text" v-model="form__data.password" />
        </div>
        <div class="label__wrapper">
          <label for="cpw">password confirm</label>
          <input id="cpw" type="text" v-model="form__data.cPassword" />
        </div>
        <button @click.prevent="signInHandler">Sign in</button>
      </form>
      <form class="input__wrapper" action="" v-if="isLoginTab">
        <div class="label__wrapper">
          <label for="id">id</label>
          <input id="id" type="text" v-model="form__data.id" />
        </div>

        <div class="label__wrapper">
          <label for="email">email</label>
          <input id="email" type="text" v-model="form__data.email" />
        </div>
        <div class="label__wrapper">
          <label for="pw">password</label>
          <input id="pw" type="text" v-model="form__data.password" />
        </div>

        <button @click.prevent="signInHandler">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { signInApi } from "@/api/api.js"
export default {
  data() {
    return {
      isLoginTab: false,
      form__data: {
        id: "",
        email: "",
        password: "",
        cPassword: "",
      },
    }
  },
  methods: {
    handleTab(tab) {
      this.isLoginTab = tab
    },
    async signInHandler() {
      try {
        await signInApi(this.form__data)
      } catch (error) {
        // console.log("error is - ", error.response)
        // alert(error.response.data.message)
        throw new Error(error.response.data.message)
      }
    },
    closeModal() {
      this.$emit("closeModal")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/style/common";

.header__wrapper {
  display: flex;
  .header {
    margin: 1rem 1rem;

    &.clicked {
      color: $col-primary;
    }
    &.clicked::after {
      border: 1px solid $col-primary;
    }
    cursor: pointer;
    position: relative;
    &::after {
      content: "";
      border: 1px solid black;
      position: absolute;
      width: 100%;
      bottom: 0px;
    }
    &:hover {
      color: $col-primary;
    }
    &:hover::after {
      border: 1px solid $col-primary;
    }
  }
}
.modal__wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form__wrapper {
    background: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input__wrapper {
      display: flex;
      overflow: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .label__wrapper {
        display: flex;
        flex-direction: column;

        margin: 0 1rem;
      }
    }
    button {
      margin: 1rem 0;
      background: none;
      border: none;
      &:hover {
        color: #1aab8a;
      }
    }
  }
}
</style>
