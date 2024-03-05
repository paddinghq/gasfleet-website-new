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
    id: 8,
    img: ImgSrc1,
    rectangle: rectangleImg,
    title: "Our team",
    text: "Our team members have worked on projects across the nation and are committed to delivering the highest level of service and quality",
  },
]);

const activeTab = ref("management");

const activeComponent = computed(() => {
  switch (activeTab.value) {
    case "engineering":
      return Engineering;
    case "admin":
      return Admin;
    case "it":
      return InformationTechnology;
    case "contractors":
      return Contractors;
    default:
      return Management;
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

      <div class="flex gap-12 items-center justify-center pb-8 pt-6">
        <button
          class="text-[#777777] border-none font-semibold text-xl oswald focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-4"
          @click="activateTab('management')"
          :class="{
            active: activeTab === 'management',
          }"
          autofocus
          style="outline: none"
        >
          Management
        </button>
        <button
          class="text-[#777777] border-none font-semibold text-xl oswald focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-4"
          @click="activeTab = 'engineering'"
          :class="{ active: activeTab === 'engineering' }"
        >
          Engineering
        </button>
        <button
          class="text-[#777777] border-none font-semibold text-xl oswald focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-4"
          @click="activeTab = 'admin'"
          :class="{ active: activeTab === 'admin' }"
        >
          Admin
        </button>
        <button
          class="text-[#777777] border-none font-semibold text-xl oswald focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-4"
          @click="activeTab = 'it'"
          :class="{ active: activeTab === 'it' }"
        >
          Information Technology
        </button>
        <button
          class="text-[#777777] border-none font-semibold text-xl oswald focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-4"
          @click="activeTab = 'contractors'"
          :class="{ active: activeTab === 'contractors' }"
        >
          Contractors
        </button>
      </div>
    </div>

    <div class="container mx-auto py-20">
      <component :is="activeComponent" />
    </div>

    <div class="bg-[#eff6ff] text-center py-20">
      <div class="container mx-auto">
        <h2 class="text-[#333333] text-[32px] font-semibold tracking-tighter">
          Convinced yet? Check out projects we have done.
        </h2>
        <div class="text-[#333333] mt-3 text-lg tracking-wide">
          <p class="text-lg">
            Unleash the potential of your projects with our pioneering oil and gas
            engineering solutions<br />Let's shape the future together. Talk to us
            about your next groundbreaking project
          </p>
        </div>
        <button
          class="bg-[#205FAD] p-[1rem] font-semibold text-sm rounded-xl border-none text-white mt-[1.3rem] hover:bg-[#66a1ea] transition-all"
        >
          Projects
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
