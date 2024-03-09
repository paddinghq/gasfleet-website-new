<script setup>
const props = defineProps({
  Heros: Array,
});
</script>

<template>
  <div class="relative bg-[#f1f1f1]">
    <div v-for="Hero in Heros" :key="Hero.id">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative h-[298px] object-cover lg:h-[476px]"
        alt="ourteam-image"
        :src="Hero.img"
      />
      <div class="container mx-auto relative bottom-40 lg:bottom-64">
        <NuxtImg
          class="absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[83px] h-[212px] md:w-[100px] md:left-28 lg:left-36 lg:w-[157px] lg:h-[247px]"
          :class="Hero.id === 2 ? 'left-[8.5rem]' : 'left-[5.5rem]'"
          :src="Hero.rectangle"
          alt="rectangle"
        />
        <div
          class="text-white absolute top-[52%] left-[46%] transform -translate-x-1/2 -translate-y-1/2 md:left-[42%]"
          :class="Hero.id === 2 ? 'lg:left-[41%]' : ''"
        >
          <h1
            class="font-semibold mt-5 text-[28px]"
            :class="Hero.id === 10 || 8 ? 'lg:text-5xl' : 'lg:text-[48px] xl:[64px]'"
          >
            {{ Hero.title }}
          </h1>
          <p class="mt-2 sans md:mt-4 lg:text-base xl:text-sm" :class="Hero.id === 8 ? 'text-xs' : 'text-sm'">
            {{ Hero.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
