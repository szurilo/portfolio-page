<template>
  <div class="flex justify-center pt-4 space-x-2">
    <GithubIcon redirectTo="https://github.com/szurilo"></GithubIcon>
    <a href="https://www.linkedin.com/in/jozseftar/" target="_blank">
      <svg
        class="w-6 h-6 text-gray-600 transition duration-500 hover:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script>
import GithubIcon from "./GithubIcon.vue";
export default {
  name: "Footer",
  components: { GithubIcon },
};
</script>
