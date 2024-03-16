<script setup>
import Hero from "./Hero.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

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
    name: "EPCM",
    link: "EPCM",
  },
  {
    name: "Natural Gas Distribution",
    link: "GAS",
  },
  {
    name: "Power Distribution",
    link: "power",
  },
  {
    name: "Infrastructure Development",
    link: "IDPM",
  },
]);

const selectedHead = ref("");
const router = useRouter();

const performRouting = () => {
  const selectedHeadValue = selectedHead.value;
  switch (selectedHeadValue) {
    case "EPCM":
      router.push("/EPCM");
      break;
    case "Natural Gas Distribution":
      router.push("/GAS");
      break;
    case "Power Distribution":
      router.push("/power");
      break;
    case "Infrastructure Development":
      router.push("/IDPM");
      break;

    default:
      break;
  }
};

const selectHead = (Head) => {
  selectedHead.value = Head;
  if (process.client) {
    localStorage.setItem("selectedHead", selectedHead.value);
    console.log(selectedHead.value);
  }

  performRouting();
};

onMounted(() => {
  if (process.client) {
    selectedHead.value = localStorage.getItem("selectedHead") || "";
  }
});
</script>

<template>
  <div>
    <div class="relative bg-[#f1f1f1]" v-for="Hero in Heros" :key="Hero.id">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative object-cover lg:h-[476px]"
        :class="Hero.id === 4 ? 'h-[340px]' : 'h-[300px]'"
        alt="ourteam-image"
        :src="Hero.img"
      />
      <div
        class="container mx-auto relative lg:bottom-64 xl:bottom-60"
        :class="Hero.id === 4 ? 'bottom-[11.5rem]' : 'bottom-40'"
      >
        <NuxtImg
          class="absolute top-[43%] left-20 transform -translate-x-1/2 -translate-y-1/2 w-[83px] lg:left-32 lg:w-[157px] lg:h-[247px] xl:left-28"
          :class="Hero.id === 4 ? 'h-[250px]' : 'h-[217px]'"
          :src="Hero.rectangle"
          alt="rectangle"
        />
        <div
          class="w-3/4 text-white absolute top-[44%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 md:left-[48%] lg:left-[50%] xl:left-[46%]"
        >
          <h1
            class="font-semibold mt-5 text-[24px] lg:text-5xl"
            :class="Hero.id === 4 ? 'md:text-4xl' : 'xl:text-[64px]'"
          >
            {{ Hero.title }}
          </h1>
          <p class="mt-2 font-semibold text-sm md:mt-4">
            {{ Hero.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="relative inline-block w-full bg-gray-200 md:hidden">
      <select
        v-model="selectedHead"
        @change="selectHead($event.target.value)"
        class="block appearance-none w-full bg-gray-200 px-6 py-4 rounded shadow leading-tight font-medium text-xl oswald cursor-pointer text-sky-700 transition-all hover:text-sky-700 focus:outline-none focus:shadow-outline duration-300"
      >
        <option disabled :value="selectedHead">{{ selectedHead }}</option>
        <option
          class="font-med ium text-xl oswald text-white cursor-pointer transition-all hover:text-sky-700 active:text-sky-700 focus:text-sky-700"
          :value="Head.name"
          v-for="Head in Heads"
          :key="Head"
        >
          {{ Head.name }}
        </option>
      </select>
      <img
        src="../public/down.png"
        class="absolute w-8 top-3 right-6"
        alt="down"
      />
    </div>

    <div class="bg-gray-200 hidden md:block">
      <ul class="flex justify-between max-w-4xl py-6 px-20 mx-auto xl:py-8">
        <li
          class="font-medium text-xl oswald transition-all hover:text-sky-700 active:text-sky-700 focus:text-sky-700"
          v-for="Head in Heads"
          :key="Head"
        >
          <NuxtLink :to="Head.link">{{ Head.name }}</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="container mx-auto py-10 px-6 max-w-4xl md:py-20 md:px-10">
      <p class="text-xl oswald md:text-2xl">{{ About }}</p>
    </div>

    <div
      class="container px-6 flex flex-col gap-16 my-10 lg:px-10 lg:my-16 lg:gap-20 xl:mx-auto xl:px-0"
    >
      <div
        v-for="mission in MissionSection"
        :key="mission.id"
        :class="
          mission.id === 2 || mission.id === 4
            ? 'lg:flex-row-reverse'
            : 'lg:flex-row'
        "
        class="flex flex-col-reverse justify-between items-center lg:gap-10 xl:gap-20"
      >
        <div class="h-[299px] w-[327px] lg:w-[548px] lg:h-[340px]">
          <NuxtImg :src="mission.img" alt="eng-img" class="h-full w-full" />
        </div>
        <div class="w-full lg:w-1/2">
          <h3 class="font-semibold text-2xl text-sky-700 lg:text-4xl">
            {{ mission.title }}
          </h3>
          <p
            class="my-6 w-10/12 text-xs md:text-sm lg:text-base lg:mb-0 lg:mt-4"
          >
            {{ mission.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="bg-gray-100" v-if="showSection">
      <div class="container mx-auto py-16 px-6 md:px-10 xl:px-0">
        <div class="text-center">
          <h2 class="font-semibold text-2xl text-sky-700 lg:text-4xl">
            {{ OtherServiceHeader }}
          </h2>
        </div>

        <div
          class="flex flex-col justify-between gap-6 mt-6 lg:flex-row lg:mt-8"
        >
          <div v-for="OtherService in OtherServices" :key="OtherService.title">
            <div class="bg-gray-200 rounded-xl p-4">
              <NuxtImg
                :src="OtherService.ImgSrc"
                alt="eng-img"
                height="48"
                width="48"
              />
              <h4 class="my-4 font-semibold text-xl">
                {{ OtherService.title }}
              </h4>
              <p>{{ OtherService.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-blue-100" v-if="showSection">
      <div class="container mx-auto py-10 px-6 text-center lg:py-16">
        <h2 class="font-semibold text-xl lgtext-2xl xl:text-[32px]">
          {{ ConvinceTitle }}
        </h2>
        <p class="w-full mx-auto my-6 lg:w-3/4 xl:text-lg">
          {{ ConvinceText }}
        </p>
        <NuxtLink to="project">
          <button
            class="py-3 px-4 text-white bg-blue-800 font-semibold text-sm rounded-xl hover:bg-blue-500 transition-all"
          >
            {{ ConvinceBtn }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

