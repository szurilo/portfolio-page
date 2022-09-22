<template>
  <div class="max-w-4xl mx-auto">
    <div class="pt-8 overflow-hidden pr-9 pb-12">
      <img
        src="~assets/avatar.png"
        class="w-36 h-36 rounded-full float-right shadow-2xl shadow-white neon-shadow"
      />
      <h2 class="text-8xl font-semibold">Hi,</h2>
      <h2 class="text-4xl font-semibold">my name is József.</h2>
    </div>

    <p class="mt-3">
      I am a full stack web developer. I love projects that make the world a
      better place.
    </p>
    <p class="mt-4">
      I have more than 10 years of experience in developing all kinds of
      software solutions but my expertiese is web development. I can deliver
      vast functionalities on the front and backend with excellent user
      experiences. I only release fully optimalised, fast websites while taking
      care of SEO if it is needed.
    </p>

    <div class="flex justify-center pt-8 space-x-8">
      <a
        class="transition duration-500 hover:text-gray-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neon"
        href="CV_en.docx"
        download
        >Download my resume</a
      >
      <NuxtLink
        class="transition duration-500 hover:text-gray-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon to-white"
        to="/works"
        >Some of my works</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtHome",
};
</script>

<style>
.neon-shadow {
  box-shadow: 0px 2px 4px #00ffff80, 0px 4px 8px #00ffff80,
    0px 8px 16px #00ffff80, 0px 16px 32px #00ffff80;
}
</style>
