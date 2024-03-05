<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-12 mx-auto">
      <button @click="refatch" class="p-2 bg-gray-300 text-black my-2">Refatch</button>
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="photo in data">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="photo.url">
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
const data = ref('');

const refatch = async () => {
  data.value = await $fetch('https://api.thecatapi.com/v1/images/search?limit=8');
}

onMounted(() => refatch());


</script>