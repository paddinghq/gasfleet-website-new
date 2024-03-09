<script setup>
import { ref, computed } from "vue";

const myArray = ref([
  {
    NuxtImg: "/ourteam1.png",
    name: "Sanyaolu Yetunde",
    position: "Executive Director",
    alt: "sanyaolu-yetunde",
  },
  {
    NuxtImg: "/ourteam2.png",
    name: "Sanyaolu Olugbenga",
    position: "MD | Head of Operations",
    alt: "sanyaolu-olugbenga",
  },
  {
    NuxtImg: "/ourteam3.png",
    name: "Sanyaolu Olufemi",
    position: "Head Engineering & Project",
    alt: "sanyaolu-olufemi",
  },
  {
    NuxtImg: "/ourteam4.png",
    name: "Odubanjo Oluwadamilola",
    position: "Head Admin & HR",
    alt: "odubanjo-oluwadamilola",
  },
  {
    NuxtImg: "/ourteam5.png",
    name: "Balogun Ibrahim",
    position: "Head QA/QC",
    alt: "balogun-ibrahim",
  },
  {
    NuxtImg: "/ourteam6.png",
    name: "Samuel Ezekiel",
    position: "Head EHS",
    alt: "sanyaolu-yetunde",
  },
]);

const mappedArray = computed(() => {
  return myArray.value.map((item) => {
    return { ...item, name: item.name };
  });
});
</script>

<template>
  <div
    class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-16"
  >
    <div
      v-for="(item, index) in mappedArray"
      :key="index"
      class="bg-[#f1f1f1] rounded-2xl"
    >
      <NuxtImg :src="item.NuxtImg" :alt="item.alt" class="w-full" />
      <div class="text-center py-6">
        <h2 class="text-xl font-semibold">{{ item.name }}</h2>
        <p class="mt-2 sans text-base">{{ item.position }}</p>
      </div>
    </div>
  </div>
</template>
