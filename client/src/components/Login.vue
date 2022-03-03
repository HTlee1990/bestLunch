<template>
  <div class="modal__wrapper" @click.self="closeModal">
    <div class="form__wrapper">
      <div class="header"><h3>Sign In</h3></div>
      <div class="header"><h3>Login In</h3></div>
      <form class="input__wrapper" action="">
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
    </div>
  </div>
</template>

<script>
import { signInApi } from "@/api/api.js"
export default {
  data() {
    return {
      isLogin: false,
      form__data: {
        id: "",
        email: "",
        password: "",
        cPassword: "",
      },
    }
  },
  methods: {
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
.header {
  margin: 1rem 0;
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
