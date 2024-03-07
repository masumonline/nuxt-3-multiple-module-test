<template>
  <NuxtLoadingIndicator />
  <div class="container mx-auto">
    <div class="flex">
      <div class="w-2/12" v-if="show">
        <Sidebar />
      </div>
      <div class="container mx-auto p-3">
        <div class="flex">
          <button @click="toggle" class="bg-gray-100 text-black rounded flex flex-col px-3 py-2">
            <span v-if="show">X</span>
            <span v-else>-></span>
          </button>
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </a>
      </div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
const show = ref(true);
const toggle = () => {
  show.value = !show.value;
}
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