<script setup>
const swiper = useSwiper()
</script>

<template>
  <button @click="swiper.slideNext()" class="p-2 bg-gray-300 text-black m-1">Next</button>
  <button @click="swiper.slidePrev()" class="p-2 bg-gray-300 text-black">Previous</button>
</template>
