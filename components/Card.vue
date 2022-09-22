<template>
  <a :href="card.projectUrl" target="_blank" class="neon-shadow"
    ><div class="h-64 w-auto md:w-1/2">
      <img
        class="inset-0 h-full w-full object-cover object-center"
        :src="card.bgImage"
      />
    </div>
    <!-- content -->
    <div
      class="w-full py-4 px-6 bg-gray-800 text-white flex flex-col justify-between"
    >
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
            class="text-sm text-gray-400 uppercase tracking-wide font-semibold mt-2"
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
