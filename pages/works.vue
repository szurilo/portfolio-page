<template>
  <div class="max-w-4xl mx-auto">
    <Card v-for="card in cards" :key="card.id" :card="card"></Card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "~/components/Card.vue";

export default Vue.extend({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Tar Engineering",
          description:
            "Small business page with responsive mobile first design. Rendered by SSG with excellent SEO. Google Maps integration.",
        },
        { id: 2, title: "something", description: "" },
      ],
    };
  },
  name: "IndexPage",
  components: { Card },
});
</script>
