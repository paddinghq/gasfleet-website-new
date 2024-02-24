<template>
    <div class="grid grid-cols-3 gap-10 p-10 ">
      <div
        v-for="(item, index) in mappedArray"
        :key="index"
        class="cursor-pointer"
      >
        <NuxtImg :src="item.NuxtImg" :alt="item.alt" class="w-full" />
        <div class="my-6">
          <h2 class="text-2xl font-bold">{{ item.name }}</h2>
          <p class="mt-1">{{ item.year }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const myArray = ref([
    {
      NuxtImg: "/image/project-2.png",
      name: "Abuja Gas Expansion",
      year: "2024",
      alt: "project",
    },
    {
      NuxtImg: "/image/project-2.png",
      name: "Abuja Gas Expansion",
      year: "2024",
      alt: "project",
    },
    {
      NuxtImg: "/image/project-2.png",
      name: "Abuja Gas Expansion",
      year: "2024",
      alt: "project",
    },
    {
      NuxtImg: "/image/project-2.png",
      name: "Abuja Gas Expansion",
      year: "2024",
      alt: "project",
    },
    {
      NuxtImg: "/image/project-2.png",
      name: "Abuja Gas Expansion",
      year: "2024",
      alt: "project",
    },
    {
      NuxtImg: "/image/project-2.png",
      name: "Abuja Gas Expansion",
      year: "2024",
      alt: "project",
    },
    
  ]);
  
  const mappedArray = computed(() => {
    return myArray.value.map((item) => {
      return { ...item, name: item.name };
    });
  });
  </script>
  
  <style scoped></style>