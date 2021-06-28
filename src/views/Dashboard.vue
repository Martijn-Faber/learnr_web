<template>
  <Header />
  <Container>
    <Button @click="$router.push({ name: 'create' })">Create set</Button>
    <h2 class="mb-gap">Recent</h2>
    <Grid>
      <SetCard
        v-for="(set, index) in sets.reverse()"
        :key="index"
        :id="set.id"
        :title="set.title"
        :description="set.description"
        :author="set.author"
      ></SetCard>
    </Grid>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/layout/Container.vue";
import Header from "@/components/layout/Header.vue";
import Grid from "@/components/layout/Grid.vue";

import { api } from "@/config/api";
import SetCard from "@/components/base/SetCard.vue";
import Button from "@/components/base/Button.vue";

export default defineComponent({
  name: "Home",
  components: {
    Container,
    Header,
    Grid,
    SetCard,
    Button,
  },
  data() {
    return {
      sets: [],
    };
  },
  methods: {
    async getSets() {
      const sets = await api.get("/sets");
      this.sets = sets.data.data;
      console.log(this.sets);
    },
  },
  created() {
    this.getSets();
  },
});
</script>
