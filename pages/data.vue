<template>
  <div class="container mx-auto">
    <p>{{ $t("_welcome") }}</p>
    <h1>{{ $t("_hello") }}</h1>
    <p>{{ $t("_html") }}</p>

    <EasyDataTable
      :headers="headers"
      :items="data"
      :rows-per-page="5"
      header-text-direction="center"
      body-text-direction="center"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Header } from "vue3-easy-data-table";
const data = useState("users");

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Username", value: "username" },
  { text: "Email", value: "email" },
  { text: "Phone", value: "phone" },
  { text: "Website", value: "website" },
  { text: "Company Name", value: "company.name", sortable: true },
  { text: "Address", value: "address.street" },
  { text: "City", value: "address.city" },
];

await callOnce(async () => {
  data.value = await $fetch("https://jsonplaceholder.typicode.com/users");
});

// const { data, error } = await useFetch('https://jsonplaceholder.typicode.com/users');
</script>
