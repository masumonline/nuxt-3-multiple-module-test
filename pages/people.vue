<template>
  <section class="body-font text-gray-600">
    <div class="container mx-auto px-5 py-24">
      <h1>{{ $t("_hello") }}</h1>
      <div class="-m-4 flex flex-wrap">
        <div
          class="w-full p-4 md:w-1/2 lg:w-1/4"
          v-for="(people, index) in peoples"
          :key="index"
        >
          <People :people="people" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch("/api/peoples");
let peoples = await data.value.data.results;
</script>
