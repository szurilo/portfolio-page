<template>
  <div
    class="relative items-top justify-center min-h-screen sm:items-center text-white p-4 sm:p-6 lg:p-8 bg-gradient-radial from-gray-900 to-black"
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
