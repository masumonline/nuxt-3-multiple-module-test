<template>
  <NuxtLoadingIndicator />
  <SpeedInsights />
  <div class="container mx-auto">
    <div class="flex">
      <div class="w-2/12" v-if="show">
        <Sidebar />
      </div>
      <div class="container mx-auto p-3">
        <div class="flex">
          <button
            @click="toggle"
            class="flex flex-col rounded bg-gray-100 px-3 py-2 text-black"
          >
            <span v-if="show">X</span>
            <span v-else>-></span>
          </button>
        </div>
        <Navbar />
        <NuxtPage />
      </div>
    </div>
    <UNotifications />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";
const show = ref(true);
const toggle = () => {
  show.value = !show.value;
};
</script>

<style>
.dark body {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
