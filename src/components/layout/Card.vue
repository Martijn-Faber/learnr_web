<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  min-height: 50px;
  border-radius: var(--border-radius);
  background-color: var(--body-lighter);
  padding: 10px var(--gap-large);
  border: var(--border);
  transition: all 0.2s ease-in-out;

  &:active {
    background-color: var(--hover);
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
});
</script>
