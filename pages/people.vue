<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1>{{ $t('_hello') }}</h1>
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="(people, index) in peoples" :key="index">
          <People :people="people" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch('/api/images');
let peoples = await data.value.data.results;
</script>