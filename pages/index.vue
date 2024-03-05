<template>
  <section class="bg-gray-900 text-white">
   
  </section>
</template>

<script lang="ts" setup>
useHead({
  templateParams: {
    blogCategory: 'Tutorials'
  },
  title: 'How To Use Titles',
  titleTemplate: '%s %separator %blogCategory %separator %siteName'
})
// output: How To Use Titles | Tutorials | MyApp
</script>