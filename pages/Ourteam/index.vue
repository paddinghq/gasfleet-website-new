<script setup>
import Management from "@/components/Management.vue";
import Engineering from "@/components/Engineering.vue";
import Admin from "@/components/Admin.vue";
import InformationTechnology from "@/components/InfoTech.vue";
import Contractors from "@/components/Contractors.vue";
import { ref, computed } from "vue";

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
      <NuxtImg
        class="w-full filter brightness-[0.3] relative h-[467px]"
        alt="ourteam-image"
        src="/hero.jpg"
      />
      <NuxtImg
        class="absolute top-[43%] left-36 transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
        src="/rectangle.png"
        alt="rectangle"
      />
      <div
        class="text-white absolute top-[42%] left-[29.6rem] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="font-semibold mt-5 text-[64px]">Our team</h1>
        <p class="text-[14px] font-semibold">
          Our team members have worked on projects across the nation and are
          committed to delivering<br />the highest level of service and quality
        </p>
      </div>
      <div class="flex gap-12 items-center justify-center py-4 px-20">
        <button
          class="text-[#777777] border-none text-[20px] font-semibold focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-2"
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
          class="text-[#777777] border-none text-[20px] font-semibold focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-2"
          @click="activeTab = 'engineering'"
          :class="{ active: activeTab === 'engineering' }"
        >
          Engineering
        </button>
        <button
          class="text-[#777777] border-none text-[20px] font-semibold focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-2"
          @click="activeTab = 'admin'"
          :class="{ active: activeTab === 'admin' }"
        >
          Admin
        </button>
        <button
          class="text-[#777777] border-none text-[20px] font-semibold focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-2"
          @click="activeTab = 'it'"
          :class="{ active: activeTab === 'it' }"
        >
          Information Technology
        </button>
        <button
          class="text-[#777777] border-none text-[20px] font-semibold focus:text-[#205FAD] focus:underline focus:underline-offset-8 focus:decoration-2"
          @click="activeTab = 'contractors'"
          :class="{ active: activeTab === 'contractors' }"
        >
          Contractors
        </button>
      </div>
    </div>
    <component :is="activeComponent" />

    <div class="bg-[#eff6ff] text-center py-[64px] px-[132px]">
      <h2 class="text-[#333333] text-[32px] font-semibold tracking-tighter">
        Convinced yet? Check out projects we have done.
      </h2>
      <div
        class="text-[#333333] mt-3 text-lg tracking-wide font-normal leading-[26.1px]"
      >
        <p>
          Unleash the potential of your projects with our pioneering oil and gas
          engineering solutions<br />Let's shape the future together. Talk to us
          about your next groundbreaking project
        </p>
      </div>
      <button
        class="bg-[#205FAD] py-3 px-4 text-semibold text-sm rounded-lg border-none text-white mt-[1.3rem]"
      >
        <NuxtLink to="projects">Projects</NuxtLink>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
