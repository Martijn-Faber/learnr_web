<template>
  <div class="header">
    <Container>
      <header>
        <div>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </div>
        <div><Avatar /></div>
      </header>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  background-color: var(--body-lighter);
  padding: var(--gap-small) 0;
  margin-bottom: var(--gap);
  border-bottom: var(--border);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
