<script setup>
const toast = useToast();
const isOpen = ref(false);
const number = ref(5);
const uptoggle = ref(true);
const downtoggle = ref(true);

const up = () => {
  number.value += 5;

  toast.add({
    description: "Current Value",
    title: `${number.value}`,
    duration: 1000,
  });
};

const down = () => {
  number.value -= 5;
  toast.add({
    description: "Current Value",
    title: `${number.value}`,
    duration: 1000,
  });
};

const color = computed(() => {
  if (number.value <= 0) {
    downtoggle.value = false;
  } else {
    downtoggle.value = true;
  }

  if (number.value >= 60) {
    uptoggle.value = false;
  } else {
    uptoggle.value = true;
  }

  if (number.value < 10) {
    return "blue";
  } else if (number.value < 50) {
    return "amber";
  } else if (number.value < 75) {
    return "orange";
  } else if (number.value == 100) {
    return "red";
  } else {
    return "rose";
  }
});
</script>
<template>
  <div class="p-3">
    <UColorModeButton />
    <UAvatar
      size="2xl"
      src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="Avatar"
    />
    <UMeter :value="number" :max="60" :color="color">
      <template #indicator="{ percent }">
        <div class="w-32 text-right" :style="{ width: `${percent}%` }">
          <span v-if="number < 5" class="text-blue-300">Super Cold</span>
          <span v-else-if="number < 10" class="text-blue-500">Cold!</span>
          <span v-else-if="number < 30" class="text-amber-500">Warm</span>
          <span v-else-if="number < 40" class="text-orange-500">🔥 Hot</span>
          <span v-else-if="number < 50" class="font-bold text-rose-500">
            🔥🔥 Too hot!
          </span>
          <span v-else class="font-bold text-red-800">
            🔥🔥🔥 You Are Dead
          </span>
        </div>
      </template>
    </UMeter>
    <UButton class="m-2" @click="up" v-if="uptoggle">UP</UButton>
    <UButton class="m-2" @click="down" v-if="downtoggle">Down</UButton>
    <UButton
      label="Show toast"
      @click="toast.add({ title: number, click: onClick })"
    />
  </div>
</template>
