<script setup>
const props = defineProps({
  Heros: Array,
});
</script>

<template>
  <div class="relative bg-[#f1f1f1]">
    <div v-for="Hero in Heros" :key="Hero.id">
      <NuxtImg
      class="w-full filter brightness-[0.3] relative h-[476px] object-cover"
      alt="ourteam-image"
      :src="Hero.img"
    />
    <div class="container mx-auto relative bottom-64">
      <NuxtImg
        class="absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
        :class="Hero.id === 2 ? 'left-[8.5rem]' : 'left-[5.5rem]'"
        :src="Hero.rectangle"
        alt="rectangle"
      />
      <div
        class="text-white absolute top-[52%] transform -translate-x-1/2 -translate-y-1/2"
        :class="Hero.id === 2 ? 'left-[41%]' : 'left-[36%]'"
      >
        <h1 class="font-semibold mt-5" :class="Hero.id === 10 ? 'text-5xl' : 'text-[64px]'">{{ Hero.title }}</h1>
        <p class="mt-4 text-sm sans">{{ Hero.text }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

