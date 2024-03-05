export default defineEventHandler(async (event) => {
  const data = await $fetch('https://randomuser.me/api/?results=12');
  return { data };
})