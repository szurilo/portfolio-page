<template>
  <a :href="card.projectUrl" target="_blank"
    ><div class="h-64 w-auto md:w-1/2">
      <img
        class="inset-0 h-full w-full object-cover object-center"
        :src="card.bgImage"
      />
    </div>
    <!-- content -->
    <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
      <div class="flex justify-between mb-5 lg:mb-0">
        <h3 class="font-semibold text-2xl leading-tight truncate">
          {{ card.title }}
        </h3>
        <span class="transform rotate-45 mt-8">{{ card.contribution }}</span>
      </div>
      <p class="mt-2">
        {{ card.description }}
      </p>
      <div class="flex items-center justify-between">
        <div class="text-sm">
          <p class="mt-2">
            {{ card.tasks }}
          </p>
          <p
            class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2"
          >
            {{ card.stack }} &bull; {{ card.year }}
          </p>
        </div>
        <object v-if="card.githubURL">
          <GithubIcon :redirectTo="card.githubURL"></GithubIcon>
        </object>
      </div></div
  ></a>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>
@layer utilities {
  .neon-shadow {
    box-shadow: 0px 2px 4px rgba(0, 255, 255, 0.5),
      0px 4px 8px rgba(0, 255, 255, 0.5), 0px 8px 16px rgba(0, 255, 255, 0.5),
      0px 16px 32px rgba(0, 255, 255, 0.5);
  }
}
</style>
