<script setup>
const props = defineProps({
  Hero: Array,
  Heads: Array,
  About: String,
  MissionSection: Array,
  OtherServiceHeader: String,
  OtherServices: Array,
  ConvinceTitle: String,
  ConvinceText: String,
  ConvinceBtn: String,
});
</script>

<template>
  <div class="">
    <div class="flex">
      <NuxtImg
        :src="Hero.img"
        alt="eng-img"
        class="object-cover insert-0"
      />
      <div class="bg-black flex justify-between ">
        <NuxtImg class="" src="/rectangle.png"  width="157px" height="247px"/>
        <h2 class="font-bold text-4xl text-black">{{HeroHeader}}</h2>
        <hp class="font-bold text-xl ">{{HeroText}}</hp>
      </div>


    </div>

    <div class="bg-gray-200">
      <ul class="flex justify-between max-w-4xl py-8 mx-auto">
        <li class="font-bold text-xl" v-for="Head in Heads" :key="Head">{{ Head }}</li>
      </ul>
    </div>

    <div class="py-16 px-48">
      <p class="font-bold text-2xl">{{About}}</p>
    </div>

    <div class="container mx-auto flex flex-col gap-16">
      <div v-for="mission in MissionSection" :key="mission.id" class="flex justify-between items-center" :class="mission.id === 2 || mission.id === 4 ? 'flex-row-reverse' : 'flex-row'">
        <div class="w-1/2">
          <NuxtImg
            :src="mission.img"
            alt="eng-img"
            height="340"
            width="548"
          />
        </div>
        <div class="w-1/2">
          <h3 class="font-bold text-4xl text-sky-700">{{ mission.title }}</h3>
          <p class="mt-4 w-10/12">{{ mission.text }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 mt-16">
      <div class="container mx-auto py-16">
        <div class="text-center">
          <h2 class="font-bold text-4xl text-sky-700">{{OtherServiceHeader}}</h2>
        </div>

        <div class="flex justify-between gap-6 mt-8">
          <div  v-for="OtherService in OtherServices" :key="OtherService.title">
            <div class="bg-gray-200 rounded-xl p-8">
              <NuxtImg :src="OtherService.ImgSrc" alt="eng-img" height="48" width="48" />
              <h4 class="my-2 font-bold text-2xl">{{OtherService.title}}</h4>
              <p>{{OtherService.text}}</p>
            </div>
          </div>
        </div>       
      </div>
    </div>

    <div class="bg-blue-100">
      <div class="container mx-auto py-10 text-center">
        <h2 class="font-bold text-4xl">{{ConvinceTitle}}</h2>
        <p class="w-3/4 mx-auto my-6 text-xl">{{ConvinceText}}</p>
        <button class="py-2 px-4 text-white bg-blue-800 text-xl rounded-xl hover:bg-blue-300 transition-all">{{ConvinceBtn}}</button>
      </div>
    </div>
  </div>
</template>