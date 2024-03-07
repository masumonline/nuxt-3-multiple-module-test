<template>
  <div class="container mx-auto bg-gray-100">
    <h1 class="text-center dark:text-black">
      {{ $t('_welcome') }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
useHead({
  templateParams: {
    blogCategory: 'Tutorials',
    siteName: 'Nuxt 3',
    demo: 'Demo'
  },
  title: 'How To Use Titles',
  titleTemplate: '%s %separator %blogCategory %separator %siteName %separator %demo'
});
</script>