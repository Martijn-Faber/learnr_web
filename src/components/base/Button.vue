<template>
  <button class="button" @click="(e) => $emit('click', e)">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  width: 100%;
  min-height: 50px;
  padding: 8px;
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--body-lighter);
  color: var(--text-secundair);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: var(--border);

  &:hover {
    background-color: var(--hover);
  }

  &:active {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
});
</script>
