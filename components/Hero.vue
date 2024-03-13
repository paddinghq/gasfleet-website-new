<script setup>
const props = defineProps({
  Heros: Array,
});
</script>

<template>
  <div class="relative bg-[#f1f1f1]">
    <div v-for="Hero in Heros" :key="Hero.id">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative object-cover lg:h-[476px]"
        :class="Hero.id === 2 ? 'h-[346px]' : 'h-[298px]'"
        alt="ourteam-image"
        :src="Hero.img"
      />
      <div class="container mx-auto relative bottom-40 lg:bottom-64">
        <NuxtImg
          class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[83px] md:w-[100px] md:left-28 lg:w-[157px] lg:h-[247px]"
          :class="Hero.id === 2 ? 'h-[285px] left-[4.4rem] top-[-1rem] md:h-[225px] lg:left-32' : 'h-[212px] left-[5.5rem] top-[50%] lg:left-36'"
          :src="Hero.rectangle"
          alt="rectangle"
        />
        <div
          class="text-white absolute transform -translate-x-1/2 -translate-y-1/2 md:left-[42%]"
          :class="Hero.id === 2 ? 'top-[-1rem] left-1/2 w-[70%] md:left-1/2 lg:left-[45%]' : 'top-[52%] left-[46%]'"
        >
          <h1
            class="font-semibold mt-5 text-[28px] lg:text-5xl xl:[64px]'"
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
