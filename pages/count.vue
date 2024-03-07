<script setup lang="ts">
const counter = useState('counter', () => 0)
</script>

<template>
  <div>
    Counter: {{ counter }}
    <br>
    <button @click="counter++" class="p-2 bg-gray-300 text-black">
      +
    </button>
    <br>
    <button @click="counter--" class="p-2 bg-gray-300 text-black">
      -
    </button>
  </div>
</template>