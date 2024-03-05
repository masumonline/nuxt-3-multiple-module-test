<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="container mx-auto">
    <p>{{ t('hello') }}</p>
    <p>{{ t('world') }}</p>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "hello": "hello world!",
    "world": "World"
  },
  "bn": {
    "hello": "হ্যালো ওয়ার্ল্ড!",
    "world": "ওয়ার্ল্ড"
  }
}
</i18n>