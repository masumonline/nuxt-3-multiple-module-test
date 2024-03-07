<script setup>
const { data } = await useFetch('/api/cloud');

const refreshPic = () => {
  refreshNuxtData();
}
</script>

<template>
  <h1 class="text-center p-3">Cloudinary Photo Gallery</h1>
  <div class="grid grid-cols-4 gap-8">
    <CldUploadWidget v-slot="{ open }" uploadPreset="oej3vkly" :onUpload="refreshPic">
      <button type="button" @click="open">Upload an Image</button>
    </CldUploadWidget>

    <div v-if="data.resources" class="rounded-lg bg-gray-200" v-for="(img, index) in data.resources" :id="index">
      <CldImage class="rounded" gravity="faces" crop="auto" :src="img?.public_id" :alt="img?.context?.alt || 'test'" width="400" height="200" />
      <p class="text-black text-center">{{ img?.context?.caption || 'No Cap' }}</p>
    </div>
  </div>
</template>