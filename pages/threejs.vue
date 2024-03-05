<template>
  <div class="container mx-auto">
    <h1 class="text-center">3D</h1>
    <div class="h-96">
      <ClientOnly>
        <Landing />
        <template #fallback>
          <!-- this will be rendered on server side -->
          <p>Landing is loading...</p>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>