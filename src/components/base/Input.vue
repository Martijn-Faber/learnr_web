<template>
  <input
    class="input"
    :value="value"
    @blur="$emit('blur', $event.target.value)"
    @change="$emit('value', $event.target.value)"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 8px 20px;
  min-height: 50px;
  border-radius: var(--border-radius);
  background-color: var(--body-lighter);
  border: var(--border);
  color: var(--text);
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
  }
}
</style>
