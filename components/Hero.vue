<script setup>
const props = defineProps({
  Heros: Array,
});
</script>

<template>
  <div class="relative bg-[#f1f1f1]">
    <div v-for="Hero in Heros" :key="Hero.id">
      <NuxtImg
      class="w-full filter brightness-[0.3] relative h-[467px] object-cover"
      alt="ourteam-image"
      :src="Hero.img"
    />
    <div class="container mx-auto relative bottom-60">
      <NuxtImg
        class="absolute top-[50%] left-36 transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
        :src="Hero.rectangle"
        alt="rectangle"
      />
      <div
        class="text-white absolute top-[52%] transform -translate-x-1/2 -translate-y-1/2"
        :class="Hero.id === 2 ? 'left-[41%]' : 'left-[40%]'"
      >
        <h1 class="font-bold mt-5 text-5xl">{{ Hero.title }}</h1>
        <p class="mt-4 text-[1.2rem] sans">{{ Hero.text }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

