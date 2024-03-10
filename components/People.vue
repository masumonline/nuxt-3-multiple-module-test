<template>
  <a
    href="#"
    class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
  >
    <span
      class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
    ></span>

    <div class="sm:flex sm:justify-between sm:gap-4">
      <div>
        <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
          {{ people.name.title }} {{ people.name.first }} {{ people.name.last }}
        </h3>

        <p class="mt-1 text-xs font-medium text-gray-600">
          {{ people.location.street.number }} {{ people.location.street.name }},
        </p>
      </div>

      <div class="hidden sm:block sm:shrink-0">
        <img
          alt=""
          :src="people.picture.large"
          class="size-16 rounded-lg object-cover shadow-sm"
        />
      </div>
    </div>

    <div class="mt-4">
      <p class="text-pretty text-sm text-gray-500">
        City: {{ people.location.city }}, State: {{ people.location.state }},
        Country: {{ people.location.country }}, Postcode:
        {{ people.location.postcode }}, Timezone:
        {{ people.location.timezone.offset }}, Description:
        {{ people.location.timezone.description }}
      </p>
    </div>

    <dl class="mt-6 flex gap-4 sm:gap-6">
      <div class="flex flex-col-reverse">
        <dt class="text-sm font-medium text-gray-600">{{ people.gender }}</dt>
        <dd class="text-xs text-gray-500">
          {{ people.dob.date }}
        </dd>
      </div>

      <div class="flex flex-col-reverse">
        <dt class="text-sm font-medium text-gray-600">
          {{ people.dob.age }} Year
        </dt>
        <dd class="text-xs text-gray-500">
          {{ people.phone }}
        </dd>
      </div>
    </dl>
  </a>
</template>

<script setup>
const props = defineProps({
  people: {
    type: Object,
    required: true,
  },
});
const { people } = props;
</script>
