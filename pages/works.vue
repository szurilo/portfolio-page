<template>
  <div class="container w-100 lg:w-3/5 mx-auto flex flex-col">
    <Card
      v-for="card in cards"
      :key="card.id"
      :card="card"
      class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-16 w-100 mx-2"
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
          contribution: "Solo work",
          description:
            "Portfolio page to demonstrate my skills and other projects.",
          tasks: "UI/UX design, development, hosting, maintenance.",
          stack: "Nuxt.js, Vue.js, TailwindCSS, Netlify",
          githubURL: "https://github.com/szurilo/portfolio-page",
          year: 2022,
        },
        {
          projectUrl: "https://www.tarengineering.hu/",
          id: 1,
          bgImage: "tarengineering.jpg",
          title: "Tar Engineering",
          contribution: "Solo work",
          description:
            "Small business page with responsive mobile first design. Rendered by SSG with excellent SEO. Google Maps integration.",
          tasks: "UI/UX design, development, hosting, maintenance.",
          stack: "Nuxt.js, Vue.js, TailwindCSS, Netlify",
          githubURL: "https://github.com/szurilo/tarcomp",
          year: 2021,
        },
        {
          projectUrl: "https://otpbusiness.hu/face-ui/lobby/landing#!landing",
          id: 2,
          bgImage: "OTP_business.png",
          title: "OTP Business",
          contribution: "Team work",
          description:
            "An application that offer entrepreneurs to open their business account online.",
          tasks: "Frontend development",
          stack: "Angular, Bootstrap, Typescript, Spring Boot, Java",
          year: 2021,
        },
        {
          projectUrl: "https://web-rtc-videochat-indol.vercel.app/",
          id: 3,
          bgImage: "tarengineering.jpg",
          title: "Video chat",
          contribution: "Solo work",
          description: "Showcase of a basic video chat app.",
          tasks: "UI/UX design, development, hosting, maintenance.",
          stack: "WebRTC, Firebase, Vite, Vanilla JS, TailwindCSS, Vercel",
          githubURL: "https://github.com/szurilo/WebRTC-videochat",
          year: 2022,
        },
      ],
    };
  },
  name: "IndexPage",
  components: { Card },
});
</script>
