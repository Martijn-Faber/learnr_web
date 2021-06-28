<template>
  <Card class="set">
    <div @click="$router.push({ name: 'set', params: { id: id } })">
      <h2>{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>
    <div
      class="author"
      @click="$router.push({ name: 'user', params: { id: author.id } })"
    >
      <Avatar />
      <div class="info">
        {{ author.name }}
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.set {
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .description {
    flex-grow: 1;
    margin: var(--gap-small) 0;
  }

  .author {
    display: flex;
    align-items: center;
    gap: var(--gap);
    margin: var(--gap) 0;

    .info {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/layout/Card.vue";
import Avatar from "@/components/base/Avatar.vue";

export default defineComponent({
  name: "SetCard",
  components: {
    Card,
    Avatar,
  },
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: Object,
    },
  },
});
</script>
