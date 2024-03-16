<template>
  <div class="container mx-auto bg-gray-100">
    <h1 class="text-center dark:text-black">
      {{ $t("_welcome") }}
    </h1>
    <NuxtImg
      src="/home.jpg"
      placeholder="./loading.svg"
      width="400"
      quality="80"
      format="webp"
      loading="lazy"
      @load="doSomethingOnLoad"
    />
  </div>
</template>

<script lang="ts" setup>
const img = useImage();

const doSomethingOnLoad = () => {
  console.log("Image loaded");
};

useHead({
  templateParams: {
    blogCategory: "Tutorials",
    siteName: "Nuxt 3",
    demo: "Demo",
  },
  title: "How To Use Titles",
  titleTemplate:
    "%s %separator %blogCategory %separator %siteName %separator %demo",
});
</script>
