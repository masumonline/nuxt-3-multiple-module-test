export const usePin = defineStore('pin', {
  state: () => ({
    category: ''
  }),
  actions: {
    async fetch() {
      const info = await $fetch('https://api.nuxt.com/modules/pinia');
      this.category = info.category;
    }
  }
})