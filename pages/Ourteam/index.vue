<script setup>
import Management from "@/components/Management.vue";
import Engineering from "@/components/Engineering.vue";
import Admin from "@/components/Admin.vue";
import InformationTechnology from "@/components/InfoTech.vue";
import Contractors from "@/components/Contractors.vue";
import { ref, computed } from "vue";
const ImgSrc1 = ref("../../hero.jpg");
const rectangleImg = ref("../../rectangle.png");

const Heros = ref([
  {
    id: 2,
    img: ImgSrc1,
    rectangle: rectangleImg,
    title: "Our Team",
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
          class="button sans"
          @click="activateTab('management')"
          :class="{
            active: activeTab === 'management',
            focus: activeTab === 'management',
          }"
        >
          Management
        </button>
        <button
          class="button sans"
          @click="activeTab = 'engineering'"
          :class="{ active: activeTab === 'engineering' }"
        >
          Engineering
        </button>
        <button
          class="button sans"
          @click="activeTab = 'admin'"
          :class="{ active: activeTab === 'admin' }"
        >
          Admin
        </button>
        <button
          class="button sans"
          @click="activeTab = 'it'"
          :class="{ active: activeTab === 'it' }"
        >
          Information Technology
        </button>
        <button
          class="button sans"
          @click="activeTab = 'contractors'"
          :class="{ active: activeTab === 'contractors' }"
        >
          Contractors
        </button>
      </div>
    </div>

    <component class="container mx-auto" :is="activeComponent" />

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
        class=" mt-4 py-2 px-4 text-white bg-blue-800 text-xl rounded-xl hover:bg-blue-300 transition-all"
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
