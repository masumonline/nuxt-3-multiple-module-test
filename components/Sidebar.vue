<template>
  <div class="flex h-screen flex-col justify-between border-e bg-white dark:bg-gray-900">
    <div class="px-4 py-6">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl dark:text-white">{{ $t('_logo') }} {{ $t('_country') }}</span>
      </a>

      <ul class="mt-6 space-y-1">
        <li v-for="(menu, index) in menus" :id="index" class="">
          <NuxtLink :to="localePath(menu.path)"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600">
            {{ menu.name }}</NuxtLink>
        </li>
        <li>
          <select v-model="locale" @change="log"
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-600 w-full p-3 bg-transparent">
            <option value="en">EN</option>
            <option value="bn">BN</option>
          </select>
        </li>
        <li>
          <select v-model="colorMode.preference"
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-600 w-full p-3 bg-transparent">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
          </select>
        </li>
        <li>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-400 hover:bg-gray-600 ">
              <span class=""> Dropdown </span>

              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </summary>

            <ul class="mt-2 space-y-1 px-4">
              <li>
                <a href="#"
                  class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  Banned Users
                </a>
              </li>

              <li>
                <a href="#"
                  class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  Calendar
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>

    <div class="sticky inset-x-0 bottom-0">
      <a href="#" class="flex items-center gap-2 bg-white dark:bg-gray-900 p-4 hover:bg-gray-50">
        <NuxtImg
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&q=80"
          alt="NuxtImg" width="225" class="size-10 rounded-full object-cover" />
        <div>
          <p class="text-xs">
            <strong class="block font-medium">Riaz Uddin Masum</strong>
            <span> masum@activelava.net </span>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const colorMode = useColorMode();
const menus = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/language',
    name: 'Language'
  },
  {
    path: '/data',
    name: 'Data'
  },
  {
    path: '/posts',
    name: 'Posts'
  },
  {
    path: '/images',
    name: 'Images'
  },
  {
    path: '/cloudinary',
    name: 'Cloudinary'
  },
  {
    path: '/lightbox',
    name: 'Lightbox'
  },
  {
    path: '/slider',
    name: 'Slider'
  },
  {
    path: '/people',
    name: 'People'
  },
  {
    path: '/threejs',
    name: '3D'
  },
  {
    path: '/refatch',
    name: 'Refatch'
  },
  {
    path: '/count',
    name: 'Count'
  },
  {
    path: '/cloudflare',
    name: 'Cloudflare'
  }
];
</script>

<style>
.router-link-active {
  color: rgb(99 102 241);
}
</style>