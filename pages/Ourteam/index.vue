<script setup>
import Management from "@/components/Management.vue";
import Engineering from "@/components/Engineering.vue";
import Admin from "@/components/Admin.vue";
import InformationTechnology from "@/components/InfoTech.vue";
import Contractors from "@/components/Contractors.vue";
import { ref, computed } from "vue";

const rectangleImg = ref("rectangle.png");
const ImgSrc1 = ref("hero.jpg");

const Heros = ref([
  {
    id: 10,
    img: ImgSrc1,
    rectangle: rectangleImg,
    title: "Our team",
    text: "Our team members have worked on projects across the nation and are committed to delivering the highest level of service and quality.",
  },
]);

const activeTab = ref("Management");

const activateTab = (tab) => {
  activeTab.value = tab;
};

const Tabs = ref([
  {
    name: "Mananagement",
    tab: "mananagement",
  },
  {
    name: "Engineering",
    tab: "engineering",
  },
  {
    name: "Admin",
    tab: "admin",
  },
  {
    name: "Information Technology",
    tab: "it",
  },
  {
    name: "Contractors",
    tab: "contractors",
  },
]);

const activeComponent = computed(() => {
  switch (activeTab.value) {
    case "Engineering":
      return Engineering;
    case "Admin":
      return Admin;
    case "Information Technology":
      return InformationTechnology;
    case "Contractors":
      return Contractors;
    default:
      return Management;
  }
});

const selectTab = (tab) => {
  activeTab.value = tab;
  if (process.client) {
    localStorage.setItem("activeTab", activeTab.value);
  }
};

onMounted(() => {
  if (process.client) {
    activeTab.value = localStorage.getItem("activeTab") || "";
  }
});
</script>

<template>
  <div>
    <div class="relative bg-[#f1f1f1]">
      <Hero :Heros="Heros" />

      <div class="relative inline-block w-full bg-gray-200 lg:hidden">
        <select
          v-model="activeTab"
          @change="selectTab($event.target.value)"
          class="block appearance-none w-full bg-gray-200 px-6 py-4 rounded shadow leading-tight font-medium text-xl oswald cursor-pointer text-sky-700 transition-all hover:text-sky-700 focus:outline-none focus:shadow-outline duration-300"
        >
          <option disabled :value="activeTab" class="capitalize">
            {{ activeTab }}
          </option>
          <option
            class="font-medium text-xl oswald capitalize text-white cursor-pointer transition-all hover:text-sky-700 active:text-sky-700 focus:text-sky-700"
            :value="Tab.name"
            v-for="Tab in Tabs"
            :key="Tab.tab"
          >
            {{ Tab.name }}
          </option>
        </select>
        <img
          src="../../public/down.png"
          class="absolute w-8 top-3 right-6"
          alt="down"
        />
      </div>

      <div
        class="hidden gap-12 items-center justify-center py-6 lg:flex lg:flex-row"
      >
        <div class="" v-for="Tab in Tabs" :key="Tab.tab">
          <button
            class="text-[#777777] border-none font-semibold text-xl oswald focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-4"
            @click="activateTab(Tab.name)"
            :class="{
              active: activeTab === Tab.name,
            }"
            autofocus
            style="outline: none"
          >
            {{ Tab.name }}
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 py-10 lg:px-10 lg:py-20 xl:px-0">
      <component :is="activeComponent" />
    </div>

    <div class="bg-blue-100">
      <div class="container mx-auto py-10 px-6 text-center lg:py-16">
        <h2 class="font-semibold text-xl lgtext-2xl xl:text-[32px]">
          Convinced yet? Check out projects we have done.
        </h2>
        <p class="w-full mx-auto my-6 lg:w-3/4 xl:text-lg">
          Unleash the potential of your projects with our pioneering oil and gas
          engineering solutions<br />Let's shape the future together. Talk to us
          about your next groundbreaking project
        </p>
        <NuxtLink to="project">
          <button
            class="py-3 px-4 text-white bg-blue-800 font-semibold text-sm rounded-xl hover:bg-blue-500 transition-all"
          >
            Projects
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

