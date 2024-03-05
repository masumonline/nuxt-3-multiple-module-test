<script setup>
const colorMode = useColorMode();
const { locale } = useI18n();
</script>

<template>
  <div class="container mx-auto">
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">{{ $t('_logo') }} {{ $t('_country') }}</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NuxtLink :to="localePath('/')" class="mr-5 hover:text-gray-900">Home</NuxtLink>
          <NuxtLink :to="localePath('/language')" class="mr-5 hover:text-gray-900">Language</NuxtLink>
          <nuxt-link :to="localePath('/data')" class="mr-5 hover:text-gray-900">Data</nuxt-link>
          <NuxtLink :to="localePath('/posts')" class="mr-5 hover:text-gray-900">Posts</NuxtLink>
          <NuxtLink :to="localePath('/images')" class="mr-5 hover:text-gray-900">Images</NuxtLink>
          <NuxtLink :to="localePath('/lightbox')" class="mr-5 hover:text-gray-900">Lightbox</NuxtLink>
          <NuxtLink :to="localePath('/slider')" class="mr-5 hover:text-gray-900">Slider</NuxtLink>
          <NuxtLink :to="localePath('/people')" class="mr-5 hover:text-gray-900">Peopel</NuxtLink>
          <NuxtLink :to="localePath('/threejs')" class="mr-5 hover:text-gray-900">3D</NuxtLink>
          <NuxtLink :to="localePath('/refatch')" class="mr-5 hover:text-gray-900">Refatch</NuxtLink>
          <NuxtLink :to="localePath('/cloudflare')" class="mr-5 hover:text-gray-900">Cloudflare</NuxtLink>
        </nav>
        <form class="m-2 p-3">
          <select v-model="locale" class="border w-24 h-8 text-gray-700 rounde">
            <option value="en">en</option>
            <option value="bn">bn</option>
          </select>
        </form>
        <select v-model="colorMode.preference" class="border w-24 h-8 text-gray-700 rounded">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
    </header>

  </div>
  <NuxtPage />
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>