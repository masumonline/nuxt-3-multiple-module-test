<template>
  <div class="container mx-auto">
    <h1>{{ $t("_hello") }}</h1>
    <h1 class="text-center">3D</h1>
    <div class="h-96">
      <ClientOnly>
        <Landing :panoramaUrl="panoramaUrl" />
        <template #fallback>
          <!-- this will be rendered on server side -->
          <p>Landing is loading...</p>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
const panoramaUrl = "/img/p.jpg";
</script>
