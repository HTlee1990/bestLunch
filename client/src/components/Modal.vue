<template>
  <div class="modal__wrapper" @click.self="closeModalSelf" v-if="isOpen">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openModal() {
      console.log("it is opened!");
      this.isOpen = true;
    },
    closeModal(value) {
      this.$emit("setCategory", value);
      this.isOpen = false;
    },
    closeModalSelf() {
      //app.vue에 있는 closeModal 메소드 실행
      // this.$emit("closeModal");
      this.isOpen = false;
    },
  },
};
</script>

<style>
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
}
</style>
