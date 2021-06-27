<template>
  <Container>
    <h1>Hello world</h1>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/layout/Container.vue";

export default defineComponent({
  name: "Home",
  components: {
    Container,
  },
});
</script>
