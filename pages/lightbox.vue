<template>
  <div class="container mx-auto">
    <button @click="showSingle" class="p-3 bg-gray-800 text-white my-2 rounded">Show single picture.</button>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="(photo, index) in mimages" :id="index">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="photo"
                @click="showMultiple(index)">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <client-only>
      <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </client-only>
  </div>
</template>

<script>
export default defineComponent({
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgsRef = ref([]);
    const mimages = ref(null);
    const bigimages = ref(null);

    const onShow = () => {
      visibleRef.value = true
    }
    const showSingle = () => {
      imgsRef.value = 'https://loremflickr.com/1000/800?random=10'
      onShow()
    }

    mimages.value = [
      'https://picsum.photos/id/1/350/192',
      'https://picsum.photos/id/2/350/192',
      'https://picsum.photos/id/3/350/192',
      'https://picsum.photos/id/4/350/192',
      'https://picsum.photos/id/5/350/192',
      'https://picsum.photos/id/6/350/192',
      'https://picsum.photos/id/7/350/192',
      'https://picsum.photos/id/8/350/192',
    ];

    bigimages.value = [
      'https://picsum.photos/id/1/1000/800',
      'https://picsum.photos/id/2/1000/800',
      'https://picsum.photos/id/3/1000/800',
      'https://picsum.photos/id/4/1000/800',
      'https://picsum.photos/id/5/1000/800',
      'https://picsum.photos/id/6/1000/800',
      'https://picsum.photos/id/7/1000/800',
      'https://picsum.photos/id/8/1000/800',
    ];

    const showMultiple = (index) => {
      imgsRef.value = bigimages.value;
      indexRef.value = index;
      onShow()
    }
    const onHide = () => (visibleRef.value = false);

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide,
      mimages
    }
  }
})
</script>