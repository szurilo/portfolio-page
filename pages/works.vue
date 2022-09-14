<template>
  <div class="container w-100 lg:w-3/5 mx-auto flex flex-col">
    <Card
      v-for="card in cards"
      :key="card.id"
      :card="card"
      class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-8 w-100 mx-2"
    ></Card>
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
          projectUrl: "https://jozseftar.netlify.app/",
          id: 0,
          bgImage: "portfolio-page.jpg",
          title: "This current web page",
          description:
            "Portfolio page to demonstrate my skills and other projects.",
          tasks: "UI/UX design, development, hosting, maintenance.",
          stack: "Nuxt.js, Vue.js, TailwindCSS, Netlify",
          redirectTo: "https://github.com/szurilo/portfolio-page",
          year: 2022,
        },
        {
          projectUrl: "https://www.tarengineering.hu/",
          id: 1,
          bgImage: "tarengineering.jpg",
          title: "Tar Engineering",
          description:
            "Small business page with responsive mobile first design. Rendered by SSG with excellent SEO. Google Maps integration.",
          tasks: "UI/UX design, development, hosting, maintenance.",
          stack: "Nuxt.js, Vue.js, TailwindCSS, Netlify",
          redirectTo: "https://github.com/szurilo/tarcomp",
          year: 2021,
        },
      ],
    };
  },
  name: "IndexPage",
  components: { Card },
});
</script>
