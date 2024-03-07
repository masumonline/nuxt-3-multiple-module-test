<template>
  <div class="container mx-auto">
    <h1>{{ $t('_hello') }}</h1>
    <span>search value: </span>
    <input type="search" v-model="searchValue" class="p-2 border rounded">
    <br />
    <EasyDataTable :headers="headers" :items="data" header-text-direction="center" buttons-pagination show-index
      :sort-by="sortBy" :sort-type="sortType" :search-value="searchValue" alternating>
      <template #expand="data">
        <div style="padding: 15px">
          {{ data.title }} won championships
        </div>
      </template>
    </EasyDataTable>
  </div>
</template>

<script lang="ts" setup>
const data = useState('posts');
const sortBy = "title";
const sortType = "asc";

const searchValue = ref("");

//01718118122CB3334361
const headers = [
  { text: "User ID", value: "userId", width: 100 },
  { text: "ID", value: "id", sortable: true },
  { text: "Title", value: "title", sortable: true },
  { text: "Body", value: "body" },
];

await callOnce(async () => {
  data.value = await $fetch('https://jsonplaceholder.typicode.com/posts')
})

</script>