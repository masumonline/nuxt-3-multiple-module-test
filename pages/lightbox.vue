<script>
export default defineComponent({
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgsRef = ref([]);
    const mimages = ref(null);
    const bigimages = ref(null);

    const onShow = () => {
      visibleRef.value = true;
    };
    const showSingle = () => {
      imgsRef.value = "https://loremflickr.com/1000/800?random=10";
      onShow();
    };

    mimages.value = [
      "https://picsum.photos/id/1/350/192",
      "https://picsum.photos/id/2/350/192",
      "https://picsum.photos/id/3/350/192",
      "https://picsum.photos/id/4/350/192",
      "https://picsum.photos/id/5/350/192",
      "https://picsum.photos/id/6/350/192",
      "https://picsum.photos/id/7/350/192",
      "https://picsum.photos/id/8/350/192",
    ];

    bigimages.value = [
      "https://picsum.photos/id/1/1000/800",
      "https://picsum.photos/id/2/1000/800",
      "https://picsum.photos/id/3/1000/800",
      "https://picsum.photos/id/4/1000/800",
      "https://picsum.photos/id/5/1000/800",
      "https://picsum.photos/id/6/1000/800",
      "https://picsum.photos/id/7/1000/800",
      "https://picsum.photos/id/8/1000/800",
    ];

    const showMultiple = (index) => {
      imgsRef.value = bigimages.value;
      indexRef.value = index;
      onShow();
    };
    const onHide = () => (visibleRef.value = false);

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide,
      mimages,
    };
  },
});
</script>
<template>
  <div class="container mx-auto">
    <h1>{{ $t("_hello") }}</h1>
    <button @click="showSingle" class="my-2 rounded bg-gray-800 p-3 text-white">
      Show single picture.
    </button>

    <section class="body-font text-gray-600">
      <div class="container mx-auto px-5 py-24">
        <div class="-m-4 flex flex-wrap">
          <div
            class="w-full p-4 md:w-1/2 lg:w-1/4"
            v-for="(photo, index) in mimages"
            :id="index"
          >
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block h-full w-full object-cover object-center"
                :src="photo"
                @click="showMultiple(index)"
              />
            </a>
            <div class="mt-4">
              <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">
                CATEGORY
              </h3>
              <h2 class="title-font text-lg font-medium text-gray-900">
                The Catalyzer
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <client-only>
      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </client-only>
  </div>
</template>
