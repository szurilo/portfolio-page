<template>
  <nav class="flex max-w-4xl mx-auto">
    <NuxtLink
      class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white"
      to="/"
      >József Tar</NuxtLink
    >
    <a
      class="leading-10 pl-14 rounded transition duration-500 hover:text-gray-400"
      href="mailto:szurilo@gmail.com"
      >Contact me: szurilo@gmail.com</a
    >
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
