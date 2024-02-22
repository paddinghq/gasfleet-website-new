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
        class="text-white absolute top-[44%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="font-bold mt-5 text-5xl">Our team</h1>
        <h1 class="mt-4 text-[1.2rem]">
          Our team members have worked on projects across the nation and are
          committed to delivering<br />the highest level of service and quality
        </h1>
      </div>
      <div class="flex gap-12 items-center justify-center pb-8 pt-6">
        <button
          class="button"
          @click="activateTab('management')"
          :class="{
            active: activeTab === 'management',
            focus: activeTab === 'management',
          }"
        >
          Management
        </button>
        <button
          class="button"
          @click="activeTab = 'engineering'"
          :class="{ active: activeTab === 'engineering' }"
        >
          Engineering
        </button>
        <button
          class="button"
          @click="activeTab = 'admin'"
          :class="{ active: activeTab === 'admin' }"
        >
          Admin
        </button>
        <button
          class="button"
          @click="activeTab = 'it'"
          :class="{ active: activeTab === 'it' }"
        >
          Information Technology
        </button>
        <button
          class="button"
          @click="activeTab = 'contractors'"
          :class="{ active: activeTab === 'contractors' }"
        >
          Contractors
        </button>
      </div>
    </div>
    <component :is="activeComponent" />

    <div class="bg-[#eff6ff] text-center py-[3.8rem]">
      <h2 class="text-[#333333] text-[32px] font-bold tracking-tighter">
        Convinced yet? Check out projects we have done.
      </h2>
      <div class="text-[#333333] mt-3 text-lg tracking-wide">
        <p>
          Unleash the potential of your projects with our pioneering oil and gas
          engineering solutions<br />Let's shape the future together. Talk to us
          about your next groundbreaking project
        </p>
      </div>
      <button
        class="bg-[#205fad] p-[1rem] text-semibold text-lg rounded-xl border-none text-white mt-[1.3rem]"
      >
        Projects
      </button>
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
