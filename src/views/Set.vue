<template>
  <Header />
  <Container v-if="set.pairs.length > 0">
    <div class="set-info">
      <div>
        <h1>{{ set.title }}</h1>
        <p>{{ set.description }}</p>
      </div>

      <div
        class="author"
        @click="$router.push({ name: 'user', params: { id: set.author.id } })"
      >
        <div class="info">
          <span>gemaakt door</span>
          {{ set.author?.name }}
        </div>
        <Avatar />
      </div>
    </div>

    <div class="flip-mode" v-if="set.pairs">
      <h3 class="progress">{{ flip_index + 1 }}/{{ set.pairs.length }}</h3>
      <div class="flip-card" @click="flipped = !flipped">
        <div class="flip" :class="{ flipped: flipped }">
          <Card class="face">
            <h1>{{ set.pairs[flip_index].term }}</h1>
          </Card>
          <Card class="face back">
            <h1>{{ set.pairs[flip_index].definition }}</h1>
          </Card>
        </div>
      </div>
      <div class="buttons">
        <Button
          @mouseup="flip_index = Math.max(flip_index - 1, 0)"
          v-if="flip_index > 0"
          ><i class="bi bi-chevron-left"></i> Vorige</Button
        >
        <Button
          @mouseup="flip_index = Math.min(flip_index + 1, set.pairs.length)"
          v-if="flip_index < set.pairs.length - 1"
          >Volgende <i class="bi bi-chevron-right"></i
        ></Button>
      </div>
    </div>

    <ListLayout>
      <h2>Aantal termen in deze set ({{ set.pairs.length }})</h2>
      <div class="pair-info">
        <span>Term</span>
        <span>Definition</span>
      </div>
      <Card
        v-for="(pair, index) in set.pairs"
        :key="index"
        class="pair"
        :id="pair.id"
      >
        <span>{{ pair.term }}</span>
        <span>{{ pair.definition }}</span>
      </Card>
    </ListLayout>

    <div class="other-sets">
      <h2>Andere sets van deze maker.</h2>
      <Grid class="mt-gap">
        <SetCard
          v-for="(set, index) in sets.slice(0, 6)"
          :key="index"
          :id="set.id"
          :title="set.title"
          :description="set.description"
          :author="set.author"
        ></SetCard>
      </Grid>
    </div>
  </Container>
  <Container v-else>
    <Card> Go to the edit page to add pairs </Card>
    <Button @click="$router.push({ name: 'edit', params: { id: set.id } })"
      >Edit</Button
    >
  </Container>
</template>

<style lang="scss" scoped>
.set-info {
  margin-bottom: var(--gap);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .author {
    display: flex;
    align-items: center;
    gap: var(--gap);

    .info {
      display: flex;
      flex-direction: column;
      text-align: end;

      span {
        font-weight: 400;
      }
    }

    // hide info on smaller screens
    @media only screen and (max-width: 600px) {
      .info {
        display: none;
      }
    }
  }
}

.flip-mode {
  width: 100%;
  max-width: 500px;
  min-height: 300px;
  height: 380px;
  margin-bottom: 75px;

  display: flex;
  flex-direction: column;
  gap: var(--gap);

  .progress {
    text-align: center;
  }

  .buttons {
    display: flex;
    gap: var(--gap);
  }

  .flip-card {
    display: flex;
    flex-basis: 90%;
    width: 100%;
    perspective: 1000px;
    cursor: pointer;

    .flip {
      width: inherit;
      height: inherit;
      position: relative;
      transition: transform 0.8s;
      transform-style: preserve-3d;

      .face {
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        backface-visibility: hidden;
      }

      .back {
        transform: rotateY(180deg);
      }
    }

    .flip.flipped {
      transform: rotateY(180deg);
    }
  }
}

.pair-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    flex-basis: 50%;
  }
}

.pair {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    flex-basis: 50%;
  }
}

.other-sets {
  padding-top: 50px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { api } from "@/config/api";
import Container from "@/components/layout/Container.vue";
import Header from "@/components/layout/Header.vue";
import Grid from "@/components/layout/Grid.vue";
import Card from "@/components/layout/Card.vue";
import ListLayout from "@/components/layout/ListLayout.vue";
import Avatar from "@/components/base/Avatar.vue";
import Button from "@/components/base/Button.vue";
import SetCard from "@/components/base/SetCard.vue";

export default defineComponent({
  name: "Set",
  components: {
    Container,
    Header,
    Grid,
    Card,
    ListLayout,
    Avatar,
    Button,
    SetCard,
  },
  watch: {
    $route() {
      this.getSet();
    },
  },
  data() {
    return {
      set: {} as any,
      sets: [] as any,
      flipped: false,
      flip_index: 0,
    };
  },
  methods: {
    async getSet() {
      console.log(this.$route.params.id);
      const set = await api.get(`/sets/${this.$route.params.id}`);
      this.set = set.data.data;

      this.getUserSets();
    },
    async getUserSets() {
      const sets = await api.get(`/users/${this.set.author?.id}/sets`);
      this.sets = sets.data.data;
    },
  },
  created() {
    this.getSet();
  },
});
</script>
