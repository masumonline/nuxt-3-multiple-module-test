<script setup>
const slides = ref(Array.from({ length: 10 }, () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  // Figure out contrast color for font
  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

  return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))
</script>

<template>
  <div>
    <h2 class="p-3 text-center">Swiper Card Effect</h2>
    <Swiper class="swiper-cards" :width="240" :modules="[SwiperAutoplay, SwiperEffectCards]" :slides-per-view="1"
      :loop="true" :effect="'cards'" :autoplay="{
        delay: 300,
        disableOnInteraction: true
      }">
      <SwiperSlide v-for="(slide, idx) in slides" :key="idx"
        :style="`background-color: ${slide.bg}; color: ${slide.color}`">
        <div class="swiper-item">
          <img loading="lazy" :alt="idx" :src="`https://loremflickr.com/320/240?random=${idx}`" />
        </div>
        <div class="swiper-pagination"></div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

.swiper-cards {
  width: 240px;
  height: 240px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
