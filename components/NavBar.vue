<template>
  <nav class="flex max-w-4xl mx-auto">
    <NuxtLink
      class="block px-2 rounded transition duration-500 hover:text-gray-400"
      to="/index"
      >Portfolio</NuxtLink
    >
    <NuxtLink
      class="block px-2 rounded transition duration-500 hover:text-gray-400"
      to="/index"
      >About me</NuxtLink
    >
    <NuxtLink
      class="block px-2 rounded transition duration-500 hover:text-gray-400"
      to="/index"
      >Contact me</NuxtLink
    >
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
