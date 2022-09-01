<template>
  <div
    class="relative items-top justify-center min-h-screen bg-gray-900 sm:items-center text-white p-4 sm:p-6 lg:p-8"
  >
    <NavBar />
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "../components/NavBar.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { NavBar },
});
</script>
