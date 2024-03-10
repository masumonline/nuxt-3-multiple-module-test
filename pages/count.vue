<script setup lang="ts">
const counter = useState("counter", () => 0);
</script>

<template>
  <div class="flex p-3">
    Counter: {{ counter }}
    <button @click="counter++" class="m-2 bg-gray-300 p-2 text-black">+</button>
    <button @click="counter--" class="m-2 bg-gray-300 p-4 pt-2 text-black">
      -
    </button>
  </div>
</template>
