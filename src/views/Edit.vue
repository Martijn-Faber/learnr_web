<template>
  <Header />
  <Container>
    <ListLayout>
      <span>Title</span>
      <Input
        placeholder="title"
        :value="set.title"
        @value="set.title = $event"
        @blur="updateSet"
      />
      <span>Definition</span>
      <Input
        placeholder="description"
        :value="set.description"
        @value="set.description = $event"
        @blur="updateSet"
      />
    </ListLayout>

    <ListLayout class="mt-gap" v-if="set.pairs.length > 0">
      <h2>Aantal termen in deze set ({{ set.pairs.length }})</h2>
      <div class="pair-info">
        <span>Term</span>
        <span>Definition</span>
      </div>
      <Card v-for="(pair, index) in set.pairs" :key="index" class="pair-card">
        <div class="pair">
          <input
            :value="pair.term"
            placeholder="term"
            class="card-input"
            @change="pair.term = $event.target.value"
            @blur="updatePair(pair.id, pair.term, pair.definition)"
          />
          <input
            :value="pair.definition"
            placeholder="definition"
            class="card-input"
            @change="pair.definition = $event.target.value"
            @blur="updatePair(pair.id, pair.term, pair.definition)"
          />
        </div>
        <i class="bi bi-trash" @click="deletePair(pair.id)"></i>
      </Card>
    </ListLayout>
    <Card v-else class="no-pairs">
      You don't have any pairs to display. Click 'Create pair' to create your
      first pair
    </Card>
    <Button class="mt-gap" @mouseup="createPair">Create</Button>
  </Container>
</template>

<style lang="scss" scoped>
.no-pairs {
  width: 100%;
  max-width: 400px;
  margin: var(--gap) auto 0 auto;
}

.pair-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    flex-basis: 50%;
  }
}

.pair-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);

  .pair {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);

    .card-input {
      width: inherit;
      background: transparent;
      border: none;
      color: var(--text-secundair);

      &:focus {
        outline: none;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/layout/Header.vue";
import Container from "@/components/layout/Container.vue";
import Card from "@/components/layout/Card.vue";
import Input from "@/components/base/Input.vue";
import ListLayout from "@/components/layout/ListLayout.vue";
import { api } from "@/config/api";
import Button from "@/components/base/Button.vue";

export default defineComponent({
  name: "Edit",
  components: {
    Header,
    Container,
    Card,
    Input,
    ListLayout,
    Button,
  },
  data() {
    return {
      set: {} as any,
    };
  },
  methods: {
    async getSet() {
      const set = await api.get(`/sets/${this.$route.params.id}`);
      this.set = set.data.data;
    },
    async updateSet() {
      await api.put(`/sets/${this.$route.params.id}`, {
        title: this.set.title,
        description: this.set.description,
      });
    },
    async deletePair(pairId: string) {
      const response = await api.delete(
        `/sets/${this.$route.params.id}/pairs/${pairId}`,
      );

      if (response.status.toString().startsWith("2")) {
        this.set.pairs = this.set.pairs.filter(
          (pair: any) => pair.id !== pairId,
        );
      }
    },
    async createPair() {
      console.log("hai");
      const response = await api.post(`/sets/${this.$route.params.id}/pairs`, {
        term: "",
        definition: "",
      });

      if (response.status.toString().startsWith("2")) {
        const { id, term, definition } = response.data.data;

        console.log(`Hai`);
        this.set.pairs.push({
          id,
          term,
          definition,
        });
      }
    },
    async updatePair(pairId: string, term: string, definition: string) {
      await api.put(`/sets/${this.$route.params.id}/pairs/${pairId}`, {
        term,
        definition,
      });
    },
  },
  created() {
    this.getSet();
  },
});
</script>
