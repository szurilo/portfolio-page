<template>
  <div class="max-w-4xl mx-auto">
    <a
      class="transition duration-500 hover:text-gray-400"
      href="https://www.tarengineering.hu/"
      target="_blank"
      >Tar Engineering</a
    >
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style="background-image: url('tarengineering.jpg')"
        title="measure a part with a tool"
      ></div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-4">
          <div class="text-gray-900 font-bold text-xl mb-2">
            Tar Engineering
          </div>
          <p class="text-gray-700 text-base">
            Small business page with responsive mobile first design. Rendered by
            SSG with excellent SEO. Google Maps integration.
          </p>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <p class="text-gray-900">
              UI/UX design, development, hosting, maintenance.
            </p>
            <p class="text-gray-900">Nuxt.js, Vue.js, TailwindCSS, Netlify</p>
            <p class="text-gray-600 mt-2">2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
