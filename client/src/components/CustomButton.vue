<template>
  <button class="customBtn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  /* height: 60px; */
  padding: 0.5em 1em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin: 1rem 0;
}

button:hover {
  background: #fff;
  color: #1aab8a;
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>
