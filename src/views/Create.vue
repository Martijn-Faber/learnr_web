<template>
  <Header />
  <Container>
    <ListLayout>
      <span>Title</span>
      <Input placeholder="title" @value="title = $event" />
      <span>Definition</span>
      <Input placeholder="description" @value="description = $event" />
      <Button @mouseup="createSet">Create set</Button>
    </ListLayout>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/layout/Container.vue";
import Header from "@/components/layout/Header.vue";
import Input from "@/components/base/Input.vue";
import ListLayout from "@/components/layout/ListLayout.vue";
import { api } from "@/config/api";
import Button from "@/components/base/Button.vue";

export default defineComponent({
  name: "Create",
  components: {
    Container,
    Header,
    Input,
    ListLayout,
    Button,
  },
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    async createSet() {
      const response = await api.post(`/sets`, {
        title: this.title,
        description: this.description,
      });

      if (response.status.toString().startsWith("2")) {
        this.$router.push({
          name: "set",
          params: { id: response.data.data.id },
        });
      }

      console.log(response);
    },
  },
});
</script>
