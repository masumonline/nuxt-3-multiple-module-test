<template>
  <div class="container mx-auto">
    <h1>Hi</h1>
    <form @submit.prevent="onSubmit">
      <NuxtTurnstile v-model="token" />
      <input type="submit" />
    </form>
  </div>
</template>

<script setup>
const token = ref('');
const onSubmit = () => {
  console.log(token.value);
}
</script>