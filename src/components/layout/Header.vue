<template>
  <Container>
    <header>
      <div>
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      </div>
      <div><Avatar /></div>
    </header>
  </Container>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/layout/Container.vue";
import Avatar from "@/components/base/Avatar.vue";

export default defineComponent({
  name: "Header",
  components: {
    Container,
    Avatar,
  },
});
</script>
