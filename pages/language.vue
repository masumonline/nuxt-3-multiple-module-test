<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <p>{{ t('hello') }}</p>
</template>

<i18n lang="json">
{
  "en": {
    "hello": "hello world!"
  },
  "bn": {
    "hello": "こんにちは、世界!"
  }
}
</i18n>