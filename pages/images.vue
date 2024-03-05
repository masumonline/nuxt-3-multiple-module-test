<template>
  <div class="container mx-auto">
    <div class="flex p-3">
      <NuxtImg src="/face1.jpeg" alt="NuxtImg" width="225" />
      <img src="/face1.jpeg" alt="Img Src" width="225" />
    </div>
    <div class="flex p-3">
      <NuxtImg provider="unsplash" src="/photo-1682685796852-aa311b46f50d" width="400"/>
      <img src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?w=400" width="400"/>
    </div>
    <div class="flex p-3">
      <NuxtImg src="/bg.jpg" alt="NuxtImg" width="500" />
      <img src="/bg.jpg" alt="Img Src" width="500" />
    </div>
    <div class="p-3 flex">
      <img src="https://random.imagecdn.app/500/150">
      <NuxtImg provider="cloudinary" src="cld-sample.jpg" alt="NuxtImg" width="400" />
      <NuxtImg provider="cloudinary" src="cld-sample-3.jpg" alt="NuxtImg" width="300" />
    </div>
  </div>
</template>

<script setup>

</script>