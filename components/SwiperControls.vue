<script setup>
const swiper = useSwiper();
</script>

<template>
  <button @click="swiper.slideNext()" class="m-1 bg-gray-300 p-2 text-black">
    Next
  </button>
  <button @click="swiper.slidePrev()" class="bg-gray-300 p-2 text-black">
    Previous
  </button>
</template>
