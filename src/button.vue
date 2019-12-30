<template>
  <button class="g-button">
    <slot></slot>
  </button>
</template>
<script>
export default {};
</script>
<style  scoped>
.g-button {
  font-size: var(--font-size);
  height: var(--font-height);
  padding: 0 1em;
  border-radius: var(--boder-radius);
  border: 1px solid var(--boder-color);
  background: var(--button-bg);
}
</style>