<script setup>
import Hero from "./Hero.vue";

const props = defineProps({
  Heros: Array,
  About: String,
  MissionSection: Array,
  showSection: { type: Boolean, default: true },
  OtherServiceHeader: String,
  OtherServices: Array,
  ConvinceTitle: String,
  ConvinceText: String,
  ConvinceBtn: String,
});

const Heads = ref([
{
    name: "ECPM",
    link: "ECPM"
  },
  {
    name: "Natural Gas Distribution",
    link: "gas"
  },
  {
    name: "Power Distribution",
    link: "power"
  },
  {
    name: "Infrastructure Development",
    link: "IDPM"
  }
]);
</script>

<template>
  <div>
    <div class="relative bg-[#f1f1f1]" v-for="Hero in Heros" :key="Hero.id">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative h-[467px] object-cover"
        alt="ourteam-image"
        :src="Hero.img"
      />
      <div class="container mx-auto relative bottom-60">
        <NuxtImg
          class="absolute top-[43%] left-36 transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
          :src="Hero.rectangle"
          alt="rectangle"
        />
        <div
          class="text-white absolute top-[44%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <h1 class="font-semibold mt-5 uppercase" :class="Hero.id === 4 ? 'text-4xl' : 'text-[64px]'">{{ Hero.title }}</h1>
          <p class="mt-4 font-semibold" :class="Hero.id === 4 ? 'text-[1rem]' : 'text-sm'">{{ Hero.text }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <ul class="flex justify-between max-w-4xl py-8 mx-auto">
        <li class="font-medium text-xl oswald transition-all hover:text-sky-700 active:text-sky-700 focus:text-sky-700" v-for="Head in Heads" :key="Head">
          <NuxtLink :to="Head.link">{{ Head.name }}</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="container mx-auto py-20 max-w-4xl">
      <p class="text-2xl oswald">{{ About }}</p>
    </div>

    <div class="container mx-auto flex flex-col gap-16 my-20">
      <div
        v-for="mission in MissionSection"
        :key="mission.id"
        class="flex justify-between items-center"
        :class="
          mission.id === 2 || mission.id === 4 ? 'flex-row-reverse' : 'flex-row'
        "
      >
        <div class="w-1/2">
          <NuxtImg :src="mission.img" alt="eng-img" height="340" width="548" />
        </div>
        <div class="w-1/2">
          <h3 class="font-semibold text-4xl text-sky-700">{{ mission.title }}</h3>
          <p class="mt-4 w-10/12">{{ mission.text }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-100" v-if="showSection">
      <div class="container mx-auto py-20">
        <div class="text-center">
          <h2 class="font-semibold text-4xl text-sky-700">
            {{ OtherServiceHeader }}
          </h2>
        </div>

        <div class="flex justify-between gap-6 mt-8">
          <div v-for="OtherService in OtherServices" :key="OtherService.title">
            <div class="bg-gray-200 rounded-xl p-8">
              <NuxtImg
                :src="OtherService.ImgSrc"
                alt="eng-img"
                height="48"
                width="48"
              />
              <h4 class="my-2 font-semibold text-xl">{{ OtherService.title }}</h4>
              <p>{{ OtherService.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-blue-100"  v-if="showSection">
      <div class="container mx-auto py-20 text-center">
        <h2 class="font-semibold text-[32px]">{{ ConvinceTitle }}</h2>
        <p class="w-3/4 mx-auto my-6 text-lg">{{ ConvinceText }}</p>
        <NuxtLink to="project">
          <button
            class="py-2.5 px-4 text-white bg-blue-800 font-semibold text-sm rounded-xl hover:bg-blue-300 transition-all"
          >
            {{ ConvinceBtn }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>