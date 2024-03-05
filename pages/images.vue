<template>
  <div>
    <div class="flex p-3">
      <NuxtImg src="/face1.jpeg" alt="NuxtImg" width="225" />
      <img src="/face1.jpeg" alt="Img Src" width="225" />
    </div>
    <div class="flex p-3">
      <NuxtImg src="/bg.jpg" alt="NuxtImg" width="500" />
      <img src="/bg.jpg" alt="Img Src" width="500" />
    </div>
    <div class="p-3">
      <img src="https://random.imagecdn.app/500/150">
      <NuxtImg provider="cloudinary" src="cld-sample.jpg" alt="NuxtImg" width="400" />
      <NuxtImg provider="cloudinary" src="cld-sample-3.jpg" alt="NuxtImg" width="300" />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>