<template>
  <div class="container mx-auto">
    <h1>{{ $t("_hello") }}</h1>
    <span>search value: </span>
    <input
      type="search"
      v-model="searchValue"
      class="mb-2 rounded border p-2 text-black"
    />
    <br />
    <EasyDataTable
      :headers="headers"
      :items="data"
      :rows-per-page="10"
      :sort-by="sortBy"
      :sort-type="sortType"
      :search-value="searchValue"
      :rows-per-page-message="'rows'"
      header-text-direction="center"
      buttons-pagination
      alternating
      border-cell
    >
      <template #empty-message>
        <a href="https://google.com">nothing here</a>
      </template>
      <template #item-thumbnailUrl="{ thumbnailUrl, title }">
        <div class="player-wrapper">
          <img class="h-8 w-8 rounded-full" :src="thumbnailUrl" :alt="title" />
        </div>
      </template>

      <template #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }">
        <button
          :disabled="isFirstPage"
          @click="prevPage"
          class="m-1 bg-black p-1 text-white"
        >
          prev
        </button>
        <button
          :disabled="isLastPage"
          @click="nextPage"
          class="m-1 bg-black p-1 text-white"
        >
          next
        </button>
      </template>
    </EasyDataTable>
  </div>
</template>

<script lang="ts" setup>
const sortBy = "title";
const sortType = "asc";
const dataTable = ref();
const searchValue = ref("");
const isFirstPage = computed(() => dataTable.value?.isFirstPage);
const isLastPage = computed(() => dataTable.value?.isLastPage);

//01718118122CB3334361
const headers = [
  { text: "ID", value: "id", sortable: true, width: 100 },
  { text: "Thumbnail", value: "thumbnailUrl", sortable: true, width: 100 },
  { text: "Title", value: "title", sortable: true },
  { text: "URL", value: "url" },
];

// const data = ref([]);
const { data, pending, error, refresh } = await useFetch(
  "https://jsonplaceholder.typicode.com/photos?_limit=100",
);
</script>
