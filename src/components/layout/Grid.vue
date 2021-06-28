<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: var(--gap);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Grid",
});
</script>
