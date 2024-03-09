<script setup>
const { data } = await useFetch('/api/cloud');
const showmodal = ref(false);
const showupload = ref(false);
const password = ref('');
const pass = ref('masumi');

const loginOpen = () => {
  showmodal.value = !showmodal.value;
}

const showUploadbox = () => {
  if (password.value == pass.value) {
    showupload.value = !showupload.value;
  } else {
    alert('Wrong');
  }
}

const refreshPic = () => {
  refreshNuxtData();
}
</script>

<template>
  <h1 class="text-center p-3">Cloudinary Photo Gallery</h1>
  <button @click="loginOpen">Login</button>
  <form v-if="showmodal" v-on:submit.prevent="showUploadbox">
    <input class="bg-white border text-black" type="password" v-model="password" />
    <input type="submit" class="p-2 bg-black text-white">
  </form>
  <div class="grid grid-cols-4 gap-8">
    <CldUploadWidget v-if="showupload" v-slot="{ open }" uploadPreset="oej3vkly"
      :onUpload="refreshPic">
      <button type="button" @click="open">Upload an Image</button>
    </CldUploadWidget>

    <div v-if="data.resources" class="rounded-lg bg-gray-200" v-for="(img, index) in data.resources" :id="index">
      <CldImage class="rounded" gravity="faces" crop="auto" :src="img?.public_id" :alt="img?.context?.alt || 'test'"
        width="400" height="200" />
      <p class="text-black text-center">{{ img?.context?.caption || 'No Cap' }}</p>
    </div>
  </div>
</template>