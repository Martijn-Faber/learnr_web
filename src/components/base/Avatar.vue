<template>
  <div
    class="avatar"
    :style="{ backgroundImage: `url(${url})` }"
    :data-size="size"
  ></div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: var(--border);

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &[data-size="big"] {
    width: 100px;
    height: 100px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
  props: {
    size: {
      type: String,
    },
  },
  data() {
    return {
      url: "https://avatars.githubusercontent.com/u/69846460?s=48&v=4", //TODO: fetch avatar from api
    };
  },
});
</script>
