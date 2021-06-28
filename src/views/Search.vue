<template>
  <Header />
  <Container>
    <Input
      placeholder="Search for sets, users and more"
      v-show="!$route.query.q"
      @change="getResults($event.target.value)"
      class="mb-gap"
    />
    <Grid>
      <SetCard
        v-for="(set, index) in results"
        :key="index"
        :id="set.id"
        :title="set.title"
        :description="set.description"
        :author="set.author.name"
      ></SetCard>
    </Grid>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/layout/Container.vue";
import Header from "@/components/layout/Header.vue";
import Input from "@/components/base/Input.vue";
import { api } from "@/config/api";
import Grid from "@/components/layout/Grid.vue";
import SetCard from "@/components/base/SetCard.vue";

export default defineComponent({
  name: "Search",
  components: {
    Container,
    Header,
    Input,
    Grid,
    SetCard,
  },
  data() {
    return {
      results: [] as any,
    };
  },
  methods: {
    async getResults(query: string) {
      const response = await api.get(`search?q=${query}`);
      this.results = response.data.data;
    },
  },
  created() {
    if (this.$route.query.q) {
      this.getResults(this.$route.query.q as string);
    }
  },
});
</script>
