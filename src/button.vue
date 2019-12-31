<template>
  <button class="g-button" :calss="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <slot></slot>
  </button>
</template>
<script>
export default {
  // props: ["icon", "iconPosition"]
  //给默认值一个属性
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left"
    }
  }
};
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