<template>
  <section class="body-font text-gray-600">
    <div class="container mx-auto px-5 py-12">
      <h1>{{ $t("_hello") }}</h1>
      <button @click="refatch" class="my-2 bg-gray-300 p-2 text-black">
        Refatch
      </button>
      <div class="-m-4 flex flex-wrap">
        <div class="w-full p-4 md:w-1/2 lg:w-1/4" v-for="photo in data">
          <a class="relative block h-48 overflow-hidden rounded">
            <img
              alt="ecommerce"
              class="block h-full w-full object-cover object-center"
              :src="photo.url"
            />
          </a>
          <div class="mt-4">
            <p class="mt-1">{{ photo }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const data = ref("");

const refatch = async () => {
  data.value = await $fetch(
    "https://api.thecatapi.com/v1/images/search?limit=8",
  );
};

onMounted(() => refatch());
</script>
