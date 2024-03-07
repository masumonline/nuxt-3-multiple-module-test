export const useUserStore = defineStore('userStore', {
  state: () => ({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    address: '',
  }),
  actions: {
    async fetch() {
      const info = await $fetch('https://jsonplaceholder.typicode.com/users');
      console.log(info);
      this.name = info.name;
      this.username = info.username;
      this.email = info.email;
      this.phone = info.phone;
      this.website = info.website;
      this.company = info.company;
      this.address = info.address;
    }
  }
})