<template>
  <Header />
  <Container>
    <div class="profile">
      <Avatar size="big" />
      <div>
        <h1>{{ user.name }}</h1>
        <p>{{ user.email }}</p>
      </div>
    </div>

    <Grid class="mt-gap">
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

<style lang="scss" scoped>
.profile {
  display: flex;
  align-items: center;
  gap: var(--gap);
}
</style>

<script lang="ts">
import { api } from "@/config/api";
import { defineComponent } from "vue";
import Container from "@/components/layout/Container.vue";
import Header from "@/components/layout/Header.vue";
import Avatar from "@/components/base/Avatar.vue";
import Grid from "@/components/layout/Grid.vue";
import SetCard from "@/components/base/SetCard.vue";

export default defineComponent({
  name: "User",
  components: {
    Container,
    Header,
    Avatar,
    Grid,
    SetCard,
  },
  data() {
    return {
      user: {} as any,
      sets: [] as any,
    };
  },
  methods: {
    async getUser() {
      const user = await api.get(`/users/${this.$route.params.id}`);
      this.user = user.data.data;

      this.getUserSets();
    },
    async getUserSets() {
      const sets = await api.get(`/users/${this.user.id}/sets`);
      this.sets = sets.data.data;
    },
  },
  created() {
    this.getUser();
  },
});
</script>
