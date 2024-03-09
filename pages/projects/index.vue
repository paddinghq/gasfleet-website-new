<script setup>
import All from "@/components/All.vue";
import Completed from "@/components/Completed.vue";
import Ongoing from "@/components/Ongoing.vue";
import { ref, computed } from "vue";
const ImgSrc1 = ref("hero.jpg");
const rectangleImg = ref("rectangle.png");

const Heros = ref([
  {
    id: 2,
    img: ImgSrc1,
    rectangle: rectangleImg,
    title: "Projects",
    text: "We are committed to providing our clients with comprehensive and innovative solutions to the complex challenges facing the oil and gas industry.",
  },
]);

const Tabs = ref([
  {
    name: 'All',
    tab: 'all'
  },
  {
    name: 'Completed',
    tab: 'completed'
  },
  {
    name: 'Ongoing',
    tab: 'ongoing'
  },
])

const activeTab = ref('All');

const activeComponent = computed(() => {
  switch (activeTab.value) {
    case 'Completed':
      return Completed;
    case 'Ongoing':
      return Ongoing;
    default:
      return All;
  }
});

const activateTab = (tab) => {
  activeTab.value = tab;
};
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

      <div class="hidden gap-12 items-center justify-center pb-8 pt-6 lg:flex">
        <button
          class="button sans"
          @click="activateTab('All')"
          :class="{
            active: activeTab === 'All',
            focus: activeTab === 'All',
          }"
        >
          All Projects
        </button>
        <button
          class="button sans"
          @click="activeTab = 'Completed'"
          :class="{ active: activeTab === 'Completed' }"
        >
          Completed
        </button>
        <button
          class="button sans"
          @click="activeTab = 'Ongoing'"
          :class="{ active: activeTab === 'Ongoing' }"
        >
          Ongoing
        </button>
      </div>
    </div>

    <component class="container mx-auto" :is="activeComponent" />

    <div class="bg-blue-100 mt-5 py-16">
      <div class="container mx-auto py-10 text-center">
        <h2 class="font-semibold text-[32px] capitalize">
          Ready to revolutionize your projects? get in touch with us
        </h2>
        <p class="w-3/4 mx-auto mt-2 mb-7 text-lg text-gray-400">
          Unleash the potential of your projects with our pioneering oil and gas
          engineering solutions. Let's shape the future together. Talk to us
          about your next groundbreaking project.
        </p>
        <button
          class="py-2.5 px-4 text-white bg-blue-800 text-sm font-semibold rounded-xl hover:bg-blue-300 transition-all"
        >
          Contact us
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  color: #777777;
  border: none;
  font-size: 1.3rem;
  font-weight: 900;
}
.button:focus {
  color: #205fad;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 4px;
}

.button.focus {
  color: #205fad;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 4px;
}
</style>
