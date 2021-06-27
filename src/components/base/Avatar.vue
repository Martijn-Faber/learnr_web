<template>
  <div class="avatar" :style="{ backgroundImage: `url(${url})` }"></div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
  data() {
    return {
      url: "https://avatars.githubusercontent.com/u/69846460?s=48&v=4", //TODO: fetch avatar from api
    };
  },
});
</script>
