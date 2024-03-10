<script setup>
const { data } = await useFetch("/api/cloud");
const showmodal = ref(false);
const showupload = ref(false);
const visibleRef = ref(false);
const indexRef = ref(0);
const imgsRef = ref([]);
const password = ref("");
const pass = ref("masumi");

const loginOpen = () => {
  showmodal.value = !showmodal.value;
};

const showUploadbox = () => {
  if (password.value == pass.value) {
    showupload.value = !showupload.value;
  } else {
    alert("Wrong");
  }
};

const refreshPic = () => {
  refreshNuxtData();
};

const showMultiple = (index, img) => {
  imgsRef.value = img;
  indexRef.value = index;
  onShow();
};

const onShow = () => {
  visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);
</script>

<template>
  <h1 class="p-3 text-center">Cloudinary Photo Gallery</h1>
  <button @click="loginOpen">Login</button>
  <form v-if="showmodal" v-on:submit.prevent="showUploadbox">
    <input
      class="border bg-white text-black"
      type="password"
      v-model="password"
    />
    <input type="submit" class="bg-black p-2 text-white" />
  </form>
  <div class="grid grid-cols-4 gap-8">
    <CldUploadWidget
      v-if="showupload"
      v-slot="{ open }"
      uploadPreset="oej3vkly"
      :onUpload="refreshPic"
    >
      <button type="button" @click="open">Upload an Image</button>
    </CldUploadWidget>

    <div
      v-if="data.resources"
      class="rounded-lg bg-gray-200"
      v-for="(img, index) in data.resources"
      :id="index"
    >
      <CldImage
        class="rounded"
        gravity="faces"
        crop="auto"
        :src="img?.public_id"
        :alt="img?.context?.alt || 'test'"
        width="400"
        height="200"
        @click="showMultiple(index, img.secure_url)"
      />
      <p class="text-center text-black">
        {{ img?.context?.caption || "No Cap" }}
      </p>
    </div>
  </div>
  <client-only>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </client-only>
</template>
